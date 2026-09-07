export const name="keyhole-thin";
export const id="dl_800304f865084323bf95";
export const url=new URL("../icons/keyhole-thin.svg?v=2bf5a9b6ab27999dc9f0398c05b590a0a906c26f957325a779061e1c6e64620b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
