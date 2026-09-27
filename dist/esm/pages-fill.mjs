export const name="pages-fill";
export const id="dl_f118cc412d7e03c306dd";
export const url=new URL("../icons/pages-fill.svg?v=e01fe00e7d31e6ccb7e72fd0f71283cc1350890fccaea5391d0dec96aaec15a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
