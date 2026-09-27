export const name="lucid_3-paintbrush-vertical";
export const id="dl_0b28e2804ecd4559a8d1";
export const url=new URL("../icons/lucid_3-paintbrush-vertical.svg?v=f037197bb36392f75a93f83e1cafe9a09057e2f1eb3f094064ac526d63515b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
