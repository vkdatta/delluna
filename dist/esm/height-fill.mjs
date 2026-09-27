export const name="height-fill";
export const id="dl_fd30fe08c54b5c563075";
export const url=new URL("../icons/height-fill.svg?v=022ef40aa3dbb9e75f491492c179d7d782078f884022ec29ec9a16233100cd09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
