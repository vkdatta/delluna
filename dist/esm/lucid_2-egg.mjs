export const name="lucid_2-egg";
export const id="dl_e855aab83d554052aee7";
export const url=new URL("../icons/lucid_2-egg.svg?v=8b9b9eb6814d15d41460cd838da846bdc7553b6727be58b7714e5f5437856a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
