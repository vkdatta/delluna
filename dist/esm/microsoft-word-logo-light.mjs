export const name="microsoft-word-logo-light";
export const id="dl_7a15683b920348caa1e7";
export const url=new URL("../icons/microsoft-word-logo-light.svg?v=4631b54529446ed071d048eaea9d51b6bdb309cde7a6de113d8d901fff883163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
