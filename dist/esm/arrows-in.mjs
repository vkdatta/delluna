export const name="arrows-in";
export const id="dl_69e781b3acee4dce9606";
export const url=new URL("../icons/arrows-in.svg?v=20476720818b64ba2d81f348fb3d7129184ae6a2c5d61e7936494f6bafcc315a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
