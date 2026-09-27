export const name="cloud-moon";
export const id="dl_e46ee834d42f4261a43c";
export const url=new URL("../icons/cloud-moon.svg?v=aa8587accc1ac9228d6d0e891833f245062c45552411a6161e06c315821097c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
