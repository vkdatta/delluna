export const name="bluetooth-connected-fill";
export const id="dl_e43ba33fa64b48b181b0";
export const url=new URL("../icons/bluetooth-connected-fill.svg?v=6c93a37fa2e8d06f65d49b6271c5ab55ab39748d43afd824c35ce26302ba4af5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
