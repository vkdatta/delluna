export const name="lucid_3-receipt-turkish-lira";
export const id="dl_722d9edd1c184ee2acc0";
export const url=new URL("../icons/lucid_3-receipt-turkish-lira.svg?v=1a60c9c76d71c8873e3debb4080645739f12e1f96798e6b855f26a11f76e6680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
