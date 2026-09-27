export const name="handheld_controller-fill";
export const id="dl_c99c76749f1a0c0f577c";
export const url=new URL("../icons/handheld_controller-fill.svg?v=8ddf0e35b6bea67e85849bf5aca88fcf4324d27706357b3717d42938d26fbde3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
