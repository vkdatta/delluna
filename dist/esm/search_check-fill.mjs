export const name="search_check-fill";
export const id="dl_6cf5d99804abdabc9ab4";
export const url=new URL("../icons/search_check-fill.svg?v=abf12b9ac263fc5af6d46f84aaa371235f4e340cb02b3d014424fcea50f5f749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
