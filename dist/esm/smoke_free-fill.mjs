export const name="smoke_free-fill";
export const id="dl_5ed2ef8df25aa01ca637";
export const url=new URL("../icons/smoke_free-fill.svg?v=3bb94c42231a73f92ee303569b0f293e0ce15fd7e9fa4704a827e04b57b8e571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
