export const name="stylus-fill";
export const id="dl_633c7a71d54d388267d0";
export const url=new URL("../icons/stylus-fill.svg?v=ab7e0e447fa8efa8fdecec8ffb47b51c84ef0a19d2a8a420c068370a51e2747e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
