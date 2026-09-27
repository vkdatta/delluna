export const name="file-c-sharp-thin";
export const id="dl_e5e187480f6e456dbe04";
export const url=new URL("../icons/file-c-sharp-thin.svg?v=3b1841c1d8ed76c5dc46fca3e0b62d2817e33b998d4db166665d9b4c6ebb235c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
