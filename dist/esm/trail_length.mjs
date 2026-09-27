export const name="trail_length";
export const id="dl_08e923cf5b31ab915e5b";
export const url=new URL("../icons/trail_length.svg?v=1614134a7f71e82ebba1f3d9fa50825f1c693a66082a7ccb548813236f6466d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
