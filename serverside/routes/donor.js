import {Router} from 'express'
import * as donor from '../requestHandler.js'
const  router =Router()
router.route('').get(donor.getDonors)
router.post('/add',donor.addDonors)
router.get('/getDonor/:id',donor.getDonor)
router.put('/editDonor/:id',donor.editDonor)
router.route('/deleteDonor/:id').delete(donor.deleteDonor)
router.get('/search',donor.searchDonor)
router.get('/select',donor.selectDonor)
export default router