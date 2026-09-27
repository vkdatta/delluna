export const name="arrow-elbow-right-down-duotone";
export const id="dl_98b0e45ccd0c4495883d";
export const url=new URL("../icons/arrow-elbow-right-down-duotone.svg?v=e7c26d6965923814887d27685da0956ab3d8ea0c3504df22efb0bb656dd403d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
