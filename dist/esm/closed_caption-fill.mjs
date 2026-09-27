export const name="closed_caption-fill";
export const id="dl_7b46d9da16d702e3a4b9";
export const url=new URL("../icons/closed_caption-fill.svg?v=884c3e49331497b04a9fbba66e73ee2ffc6d58a1071a979d5dcd498300d7e0a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
