export const name="speaker-hifi-thin";
export const id="dl_f3d6615505a0e946db7e";
export const url=new URL("../icons/speaker-hifi-thin.svg?v=b371615288d4ca2b1a0ca21cb635b6fd3aada3a7571be887cc1c179ee4e50b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
