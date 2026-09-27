export const name="dice-three-duotone";
export const id="dl_4eb75f447f1b46529531";
export const url=new URL("../icons/dice-three-duotone.svg?v=0f4d754f1fc190c8fa8b35e22652b21f551031564411d1affb785101235c5952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
