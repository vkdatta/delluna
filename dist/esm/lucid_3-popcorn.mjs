export const name="lucid_3-popcorn";
export const id="dl_44436830a5384b4d9c46";
export const url=new URL("../icons/lucid_3-popcorn.svg?v=169074f4ff769e8d87786f24d959da239ed282acb50c3d8a700b3e11058a169d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
