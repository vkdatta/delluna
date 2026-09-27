export const name="lucid_3-playing-card";
export const id="dl_8542480e2d584782bbd5";
export const url=new URL("../icons/lucid_3-playing-card.svg?v=6113d42980312735c86d371cd6fc1acad3f474adc71e4fea91a15fdd51c5e498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
