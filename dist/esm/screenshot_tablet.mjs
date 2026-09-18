export const name="screenshot_tablet";
export const id="dl_a1081aadf5cf45dda984";
export const url=new URL("../icons/S/screenshot_tablet.svg?v=2503317b4deb5051e761f0d767085aba4d6a2573f1f2eda541ea714ce613f9e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
