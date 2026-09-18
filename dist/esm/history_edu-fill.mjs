export const name="history_edu-fill";
export const id="dl_6827356120734359b549";
export const url=new URL("../icons/history_edu-fill.svg?v=87ccedc5c5775e685124ff23caa7c69a883c2848e63b86b3145f3c66bc561fa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
