export const name="forward_10";
export const id="dl_d7086c5770bf48a9aa7e";
export const url=new URL("../icons/forward_10.svg?v=8e6d1040b5f559adea0063fdf641ce36914d187c126fe0f5b8e239b3997e491d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
