export const name="password-duotone";
export const id="dl_ab06c393fcc2421380e4";
export const url=new URL("../icons/password-duotone.svg?v=1e81749df19c9894b842f956e5b20b92dbaa00bbe894443747cdd9062f48322c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
