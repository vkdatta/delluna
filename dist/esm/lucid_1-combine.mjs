export const name="lucid_1-combine";
export const id="dl_3310eef0cd134657bfee";
export const url=new URL("../icons/lucid_1-combine.svg?v=59a28c64c0fdb57029cce0e8f7683ce1c19c92a01c261112848905fa55b7babf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
