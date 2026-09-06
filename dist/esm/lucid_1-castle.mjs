export const name="lucid_1-castle";
export const id="dl_51a05cc74cd849f3ae04";
export const url=new URL("../icons/lucid_1-castle.svg?v=3c967d9afae29b125f72a89d8ccc0b13010b2fd7933a774c031c93d7bb0a359f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
