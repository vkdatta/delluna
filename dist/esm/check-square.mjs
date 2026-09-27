export const name="check-square";
export const id="dl_ecfb02d758274bc29675";
export const url=new URL("../icons/check-square.svg?v=ea8fa27ee70de2326c8c6ff097f07a8143bd9407cccbe5a5e6cec6199a399b96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
