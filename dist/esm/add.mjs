export const name="add";
export const id="dl_1839406d7dcfbd47f557";
export const url=new URL("../icons/add.svg?v=8ef0cb5abe53c59909ede4f22151d1ac3945f63337cdb781b56d49f11746f229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
