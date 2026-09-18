export const name="enterprise_off-fill";
export const id="dl_2c8e3f4fb20d44b386fd";
export const url=new URL("../icons/enterprise_off-fill.svg?v=1fa937ebdb2c38962c3635ebbc91e73784e63cbd981bb1ca638904e53aa9e2fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
