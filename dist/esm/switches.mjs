export const name="switches";
export const id="dl_96f26eafa1dafb6b9f82";
export const url=new URL("../icons/switches.svg?v=715c235688fffe15c470154bf9b0f39d8e716b6748de930192fcfde78cf35f36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
