export const name="vignette-duotone";
export const id="dl_1a19e0ba18423bed8f4a";
export const url=new URL("../icons/vignette-duotone.svg?v=d047af438aaffbeb890cd9a9b32915bd2de05f889d0678cf70b3b74527627201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
