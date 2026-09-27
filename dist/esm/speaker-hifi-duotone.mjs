export const name="speaker-hifi-duotone";
export const id="dl_44d807f1709ff4e8ecef";
export const url=new URL("../icons/speaker-hifi-duotone.svg?v=2f1ef0632e129b0a7248091d7f7f6aec5472085da116201211756d77888ee374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
