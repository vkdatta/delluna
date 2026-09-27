export const name="horse-fill";
export const id="dl_7c4c843d0b8d42feb3c6";
export const url=new URL("../icons/horse-fill.svg?v=a32137637b59a08409a223d043c76d30ec27897575ebf2277ef60bc4447c854c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
