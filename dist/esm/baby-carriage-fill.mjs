export const name="baby-carriage-fill";
export const id="dl_308ea353f5334922a648";
export const url=new URL("../icons/baby-carriage-fill.svg?v=65159c1abe40458e4f54c9ca2638b3fa592a37b08c36bb89471bfa7fd7915e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
