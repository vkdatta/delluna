export const name="arrow-u-left-down-fill";
export const id="dl_addb7e09bcc64bcea7ab";
export const url=new URL("../icons/arrow-u-left-down-fill.svg?v=0078dba01e78ae9f74a216002b173b75a13c9d7dbaa1805f3e1ac27d0d07de52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
