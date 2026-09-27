export const name="lucid_2-heart-plus";
export const id="dl_4beff44932b045a9ba30";
export const url=new URL("../icons/lucid_2-heart-plus.svg?v=6a3659283cb31d22b1fac7c26c195055cf546e69ca32e8ae086b306c17ca12bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
