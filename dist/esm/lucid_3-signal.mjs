export const name="lucid_3-signal";
export const id="dl_cc91d2f3f6ca4e4c8f51";
export const url=new URL("../icons/lucid_3-signal.svg?v=88ce2760cf5175bde83b571f9fb81cf232c4697d4765596f479379a2b46045fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
