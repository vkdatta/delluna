export const name="lucid_1-bath";
export const id="dl_02f474327e0c46dc8672";
export const url=new URL("../icons/lucid_1-bath.svg?v=f75a47af58b650cb2f6b3f62686df0d88d25178e173fe99935a3cbbd6d64cb88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
