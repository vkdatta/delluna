export const name="farm-fill";
export const id="dl_35d7718d37864785af29";
export const url=new URL("../icons/farm-fill.svg?v=146d6e3ea6d17c7b08bf1586e9c9eea3558b05afd94cd2710227215568d81ea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
