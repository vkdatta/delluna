export const name="battery-plus-vertical-bold";
export const id="dl_fa38e011facf44a6bc5b";
export const url=new URL("../icons/battery-plus-vertical-bold.svg?v=20c330074a49a2ce098712873264219cf55ee896d4995f9495c2e11649ebb64c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
