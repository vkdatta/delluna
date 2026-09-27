export const name="japanese_curry";
export const id="dl_aee1103557683f7ee42a";
export const url=new URL("../icons/japanese_curry.svg?v=436002ef6577de97d6aa1284aa53cf28a7ef3da15c02a51b5a40efe6eb9fbdf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
