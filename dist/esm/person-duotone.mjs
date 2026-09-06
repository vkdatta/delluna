export const name="person-duotone";
export const id="dl_ef81aea75e8243ba9b0a";
export const url=new URL("../icons/person-duotone.svg?v=fef1ecab74fe58a2b5bf46c772fccb50088793d41499a67c27e11382378ab4cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
