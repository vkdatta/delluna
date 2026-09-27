export const name="link-light";
export const id="dl_58377e4acf014ad6840e";
export const url=new URL("../icons/link-light.svg?v=b45663f124c12eeb8ec36485be87c6ac0aa39779e50b357bfdf6a9a64d6ce4bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
