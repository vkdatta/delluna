export const name="flag-checkered-duotone";
export const id="dl_fb0f3070a6a4481c80f0";
export const url=new URL("../icons/flag-checkered-duotone.svg?v=290dc65ec4b671444321ad632d761a265bfe9a8daa3d67016f417fea3b38c846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
