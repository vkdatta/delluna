export const name="sledding-fill";
export const id="dl_019c8c6b95ee40a99722";
export const url=new URL("../icons/sledding-fill.svg?v=9757cb34faed459d661d7e2a4eac61c9431700096cc4dbbcfa84abbd740ccf6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
