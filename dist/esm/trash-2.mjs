export const name="trash-2";
export const id="dl_45a3af58b26646a7b00a";
export const url=new URL("../icons/trash-2.svg?v=42d7c58f0af5cb177d4714fe82c7dc3c369876e4fabf10cfeb5ff1f577693696",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
