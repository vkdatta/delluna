export const name="arrow-elbow-right-down-thin";
export const id="dl_c6f0ed3cbf2d4c1cba71";
export const url=new URL("../icons/arrow-elbow-right-down-thin.svg?v=437912bae5d758bd374e3ce6e9f927ab57532d9453a797da162de09350946aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
