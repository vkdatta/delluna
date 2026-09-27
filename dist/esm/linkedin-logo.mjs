export const name="linkedin-logo";
export const id="dl_6b90fbedac2840518f28";
export const url=new URL("../icons/linkedin-logo.svg?v=fda1fa047263b7df6a16e0c155cf65cc8e2596eacbb38b64d53d22360db7ae8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
