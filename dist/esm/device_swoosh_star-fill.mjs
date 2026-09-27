export const name="device_swoosh_star-fill";
export const id="dl_bb307e057b418e6cd4d9";
export const url=new URL("../icons/device_swoosh_star-fill.svg?v=7943086c76d1b5670a3311e87c0c65cf063fb627777c89c161c61699002ef65d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
