export const name="looks_3";
export const id="dl_67661f06fa9141d402ae";
export const url=new URL("../icons/looks_3.svg?v=1567752233dfdceff251e5593037c3fc220a3620755666f7c127928c651e72c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
