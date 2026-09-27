export const name="maximize-fill";
export const id="dl_811c9b6ffc05953c0c36";
export const url=new URL("../icons/maximize-fill.svg?v=03321a15df6607d4708273243a307a0a2a572c695473b2611e3fb6547cf5fa54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
