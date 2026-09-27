export const name="desktop_landscape_add-fill";
export const id="dl_3602dcff5206b0e21fd6";
export const url=new URL("../icons/desktop_landscape_add-fill.svg?v=fb3e42be494c831d5820600c659eb7dcb1af1163e975b5a47966cec9ce111b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
