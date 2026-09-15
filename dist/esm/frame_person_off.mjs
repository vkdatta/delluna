export const name="frame_person_off";
export const id="dl_d4983d63411c443e9442";
export const url=new URL("../icons/F/frame_person_off.svg?v=8761a444886bf1c8954f7b5bb21fd6326513223bbfde08add6a86f011a51f5df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
