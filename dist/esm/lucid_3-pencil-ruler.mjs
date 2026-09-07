export const name="lucid_3-pencil-ruler";
export const id="dl_82611782319b4b059fe3";
export const url=new URL("../icons/lucid_3-pencil-ruler.svg?v=0c78f5b85fe01db7017fe8783efca39b5c89f75c65ebba6723ca322b74f1fc2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
