export const name="letter-circle-p-light";
export const id="dl_5b223545de244b04ada5";
export const url=new URL("../icons/letter-circle-p-light.svg?v=9bea790a6693239e8aa3d5d06daf4bfee0d83e4de78a182574ba5c3e150a5ddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
