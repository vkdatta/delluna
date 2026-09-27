export const name="washing-machine-duotone";
export const id="dl_ba8ce5d32ac4f4444b8d";
export const url=new URL("../icons/washing-machine-duotone.svg?v=e419871a0e02a3a2d6227296bc1098873b619084664868ec847d5acc65b00ca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
