export const name="smoke_free-fill";
export const id="dl_70fab7d71ed44294a5a2";
export const url=new URL("../icons/S/smoke_free-fill.svg?v=3bb94c42231a73f92ee303569b0f293e0ce15fd7e9fa4704a827e04b57b8e571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
