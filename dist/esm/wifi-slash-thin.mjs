export const name="wifi-slash-thin";
export const id="dl_d9ae33e5ff89d91caa9d";
export const url=new URL("../icons/wifi-slash-thin.svg?v=5a3c9faaf5f89bf1dd541d0106708e1e3d009d22bc3e1cb415061666288f6e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
