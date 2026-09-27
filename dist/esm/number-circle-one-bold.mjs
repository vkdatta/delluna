export const name="number-circle-one-bold";
export const id="dl_ac6f5cc601644354b1db";
export const url=new URL("../icons/number-circle-one-bold.svg?v=aaf1d47bf23a2bde67d2992d83a0c208cd0b390f388994c5a8d755dbeea4e00c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
