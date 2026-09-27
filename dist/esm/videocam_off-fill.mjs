export const name="videocam_off-fill";
export const id="dl_45182ff573f9560fca74";
export const url=new URL("../icons/videocam_off-fill.svg?v=18f2810adaa86c839b7c0ea877aa708ac30401564c70d57c61ed18b9ab4e1fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
