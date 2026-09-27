export const name="mobile_off";
export const id="dl_1de72dced9ca6a6b5e06";
export const url=new URL("../icons/mobile_off.svg?v=fa3b20c89be027daaf2ebc3e3bc4ccf10e214959bf36e4978ebafafbf5459d15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
