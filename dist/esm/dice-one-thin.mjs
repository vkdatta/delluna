export const name="dice-one-thin";
export const id="dl_f398aa66c24a480ab2d5";
export const url=new URL("../icons/dice-one-thin.svg?v=a48c60e97be5eaf4f450955c6810d7319056f4cecd696d1054b5406b47edae18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
