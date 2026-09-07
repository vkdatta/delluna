export const name="stamp-light";
export const id="dl_88d3a38fabfa4d69ae0c";
export const url=new URL("../icons/S/stamp-light.svg?v=1ac4e080f5c8d7ebba611f91f1008f42570251872b8e908336ae7a4a72542478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
