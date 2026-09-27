export const name="lucid_2-eclipse";
export const id="dl_f9ab737aa01b4350ad34";
export const url=new URL("../icons/lucid_2-eclipse.svg?v=9d6484819ab0c971f5331c3290f13c80b5d8f78d5dc777aaca128891b500a98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
