import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFirstAid, faGlobe, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

const Acheivement = () => {
    const firstAid = <FontAwesomeIcon icon={faFirstAid} />
    const globe = <FontAwesomeIcon icon={faGlobe} />
    const clipboard = <FontAwesomeIcon icon={faClipboardCheck} />
    return (
        <div className="py-5" id="history">
            <div className="d-flex justify-content-center gap-5 my-5 flex-wrap">
                <div>
                    <div className="border fs-1 py-3">{firstAid}</div>
                    <h2 className="py-3">150</h2>
                    <h4>IN-HOUSE DOCTORS</h4>
                </div>
                <div className="border-start border-end  px-5 ">
                    <div className="border fs-1 py-3">{globe}</div>
                    <h2 className="py-3">50+</h2>
                    <h4>MEDICAL BRANCHES</h4>
                </div>
                <div>
                    <div className="border fs-1 py-3">{clipboard}</div>
                    <h2 className="py-3">5000+</h2>
                    <h4>SUCCESSFUL THERAPY</h4>
                </div>
            </div>
            <h4 className="mb-5">Best in class psychiatric therapy <br /> conducted in traditional and <br /> the most advanced methods</h4>
            <Button>Talk To US</Button>
            <div><img className="w-50 my-5" src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/brain/brain-lobes-anatomy.ashx" alt="" /></div>
        </div>

    );
};

export default Acheivement;