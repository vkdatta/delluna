export const name="lectern";
export const id="dl_c5b46b37a67248cfa7fd";
export const url=new URL("../icons/lectern.svg?v=c5a13cb2e4bb9510c83c8acbcd3e669c8cabf71995d441627075d647ec915c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
