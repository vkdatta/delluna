export const name="tab_group-fill";
export const id="dl_526a090fb651e771d379";
export const url=new URL("../icons/tab_group-fill.svg?v=b0e2a4d9c0321824ff21497eb798e9b8572ad9382c731aea23cf3d5276706fd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
