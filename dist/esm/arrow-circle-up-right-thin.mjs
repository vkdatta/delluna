export const name="arrow-circle-up-right-thin";
export const id="dl_8a719339b0e14e5badf6";
export const url=new URL("../icons/arrow-circle-up-right-thin.svg?v=12dc6fa04a7588aae2216d8c0c5a7decf31101c7f679eaf5e8eb7d136780b7fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
