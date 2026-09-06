export const name="cowboy-hat-thin";
export const id="dl_d93897d5e42c4dfe910b";
export const url=new URL("../icons/cowboy-hat-thin.svg?v=274d0c7612d2024a1bad8ae3c4635b7ad9132e3d36bb1a38513ce2cc42f64311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
