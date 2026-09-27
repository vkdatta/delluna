export const name="bridge-duotone";
export const id="dl_7be1493979064962a124";
export const url=new URL("../icons/bridge-duotone.svg?v=2b2e2eba678303dc1d5726c9475a9089d110b155226957f6dceadf10b2cf13a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
