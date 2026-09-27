export const name="face_left-fill";
export const id="dl_da664c7caba8fcbd5858";
export const url=new URL("../icons/face_left-fill.svg?v=1c3fd146f209b95bf3278bd49628d5eceb8858900952af400fd455d007213644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
