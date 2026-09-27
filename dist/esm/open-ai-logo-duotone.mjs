export const name="open-ai-logo-duotone";
export const id="dl_f2ea889c751249ec8e92";
export const url=new URL("../icons/open-ai-logo-duotone.svg?v=cb45c0e3c4022c73e6b3c6835a38fcad7a9d86e3bc1107d7ce524e2a77014233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
