export const name="stairs-fill";
export const id="dl_00b42cb9ffaf49f7b251";
export const url=new URL("../icons/S/stairs-fill.svg?v=02406d80a78c86d12ac82bdf6037c8ac1be8f6e94126c111eb8c38321216c51b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
