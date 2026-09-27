export const name="dice-one-thin";
export const id="dl_f398aa66c24a480ab2d5";
export const url=new URL("../icons/dice-one-thin.svg?v=ef86944447df488546205794b3515de7e5b82ffad87d3fbc9926b35a70986d2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
