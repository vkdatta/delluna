export const name="lightning-a";
export const id="dl_8bb1c0c28fb7416d90da";
export const url=new URL("../icons/lightning-a.svg?v=eadcb847cc9accb95f459ba35ff42164bfe0c9ee90b1bced201eda841229d867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
