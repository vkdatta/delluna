export const name="dice-six-duotone";
export const id="dl_4a5c4fe1833b4503ae9a";
export const url=new URL("../icons/dice-six-duotone.svg?v=e89376b7802e28fad3369b28341b5f7b5b83a68b2fb861201194bbea5006019f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
