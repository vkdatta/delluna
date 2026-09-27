export const name="pin_end-fill";
export const id="dl_47043e2bba0195a16edc";
export const url=new URL("../icons/pin_end-fill.svg?v=8db2e2820cd15ba6b93bab557a9326e5788a0aeb488eaecf133b555f2d2fe8c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
