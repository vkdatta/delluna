export const name="lucid_3-pi";
export const id="dl_b7ed59f03aa24ce09c9f";
export const url=new URL("../icons/lucid_3-pi.svg?v=5d0bb430a05412b800b6d3c47e548a0daf3debd979d4fea3ccd65c60e4d9b701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
