export const name="lucid_2-corner-up-right";
export const id="dl_5301c6d5fa4e40498021";
export const url=new URL("../icons/lucid_2-corner-up-right.svg?v=da342ed8e8578abb00ebc19d7072aef7581b85a318356121cbad29b874a0c0a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
