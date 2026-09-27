export const name="swipe_right-fill";
export const id="dl_a5c060a489ba7fa7eb3b";
export const url=new URL("../icons/swipe_right-fill.svg?v=876ba7a400e700cfa82e11da9cd9be5ab0f76b74c3e568d58ece680453fef6e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
