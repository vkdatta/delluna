export const name="pants-duotone";
export const id="dl_da4d976d18d74c39bd4c";
export const url=new URL("../icons/pants-duotone.svg?v=685df04124b0bb6903d4e774ac3d290bc6b8861a10364004e5b1200c9fbf59b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
