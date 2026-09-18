export const name="text_ad-fill";
export const id="dl_91400d3ec6834ba4b056";
export const url=new URL("../icons/text_ad-fill.svg?v=7866c2bd4bf923fd1f849bc5e0ccdc02017279fae07f98ac260dc22c529a9cb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
