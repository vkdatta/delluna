export const name="settings-fill";
export const id="dl_4f325fea2b3683dc1c01";
export const url=new URL("../icons/settings-fill.svg?v=d1b64912a0651544395355116401c8d574a4b4b0231e739a6989ce617c6324ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
