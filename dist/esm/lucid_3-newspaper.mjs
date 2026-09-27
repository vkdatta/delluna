export const name="lucid_3-newspaper";
export const id="dl_515b4f3d4eed4a62b73a";
export const url=new URL("../icons/lucid_3-newspaper.svg?v=dbbbbbf6f976ee492ff1afca85ecd6f4c2f80ba0608dc4ec12ee5effa06a0391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
