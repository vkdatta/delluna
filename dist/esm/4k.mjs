export const name="4k";
export const id="dl_42d1c23d981b99eadfbd";
export const url=new URL("../icons/4k.svg?v=4047d5094a106a8817f61f421403f86fe3397c498e137bde0aadca8b83a076fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
