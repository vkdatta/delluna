export const name="lucid_2-creative-commons";
export const id="dl_4f91c194ce21479d85ff";
export const url=new URL("../icons/lucid_2-creative-commons.svg?v=906d64f325cda06916636c7648c8cb4286f58d4a40973e934f67125c42581b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
