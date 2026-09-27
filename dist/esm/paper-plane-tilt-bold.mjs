export const name="paper-plane-tilt-bold";
export const id="dl_961953b6a4104c4b8835";
export const url=new URL("../icons/paper-plane-tilt-bold.svg?v=3a5551537bd9030f8f6abbf3212e2ed40706a6dfee3ef411e2d1f6fd77dbe49b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
