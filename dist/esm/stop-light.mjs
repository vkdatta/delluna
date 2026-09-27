export const name="stop-light";
export const id="dl_4b3b491ea4e6a3d8a904";
export const url=new URL("../icons/stop-light.svg?v=c78c39cb72aed7a8b345df78134ed4652995219000f49e974ebaf9e748ea0662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
