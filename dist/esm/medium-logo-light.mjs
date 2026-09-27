export const name="medium-logo-light";
export const id="dl_3f5e5294a00d438d8c69";
export const url=new URL("../icons/medium-logo-light.svg?v=4a02b7c2e4be300fbf26ba6c243fd9a6940b1f13670c494d1008f9c59871ffc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
