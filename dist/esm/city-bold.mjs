export const name="city-bold";
export const id="dl_5718424261c64bc4b1c4";
export const url=new URL("../icons/city-bold.svg?v=e4360e5b49bd19051a84123c4c13c08825b4f45a92e9e59a7e45f4acfd472502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
