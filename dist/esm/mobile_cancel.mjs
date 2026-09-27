export const name="mobile_cancel";
export const id="dl_61ff5b6f4835968e9633";
export const url=new URL("../icons/mobile_cancel.svg?v=2720f568926a2bb4e5f93fb00ab4afa2f279b53ba8f6eecfdb05fda2449b431b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
