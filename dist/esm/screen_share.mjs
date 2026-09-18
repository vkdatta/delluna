export const name="screen_share";
export const id="dl_58d3c5d5a4fa4a24a08b";
export const url=new URL("../icons/screen_share.svg?v=fd3dad8d7e3e73ed5b5925d26ae22c1b12b8b7fead4985d0420b3d92644c455b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
