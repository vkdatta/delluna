export const name="crop_5_4";
export const id="dl_569dd1032e1effa5b13c";
export const url=new URL("../icons/crop_5_4.svg?v=45f8b437f8ef3d07f836163233a8837de9b2da1d65398cebe297ea138b2ce195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
