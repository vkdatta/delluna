export const name="open-ai-logo-light";
export const id="dl_e62d4a29d31047d98f39";
export const url=new URL("../icons/open-ai-logo-light.svg?v=0c4e79997c54aa3d7fd54f20b08d6923bcb00b16d3b5e566edb8354aac1a5350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
