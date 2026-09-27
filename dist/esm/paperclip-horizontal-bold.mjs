export const name="paperclip-horizontal-bold";
export const id="dl_4b7abac6d5eb46fcaf10";
export const url=new URL("../icons/paperclip-horizontal-bold.svg?v=c2419f1dba644304aa389cc2626cf39021387b43599d96d3a4a0e44ac1b593c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
