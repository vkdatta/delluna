export const name="grid-four";
export const id="dl_d1b891ca45c34397a9d4";
export const url=new URL("../icons/grid-four.svg?v=9e48ec8047eb0f26a0a59ffa2dbd6cb33d972390d52197ddc37e3a56859e879c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
