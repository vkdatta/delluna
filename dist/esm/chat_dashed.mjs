export const name="chat_dashed";
export const id="dl_77de835153c14d409e8c";
export const url=new URL("../icons/C/chat_dashed.svg?v=1f95becc2a163a5f7c91a458e37e1bf0eb3c173753d73f90ff234e5e37ba43d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
