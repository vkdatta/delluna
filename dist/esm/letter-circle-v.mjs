export const name="letter-circle-v";
export const id="dl_28e70ac6a1b54068a49b";
export const url=new URL("../icons/letter-circle-v.svg?v=a8b294c4de3ac0505efe6b35f8cea56a68f132329ab95db8d9537b0d092b8a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
