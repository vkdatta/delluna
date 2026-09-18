export const name="verified_off-fill";
export const id="dl_bc0dfdce80434590b308";
export const url=new URL("../icons/V/verified_off-fill.svg?v=bdc6188cbe95eea9a480b626622bcc5b36e5520b850f0d7fda8572c4c0d1deab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
