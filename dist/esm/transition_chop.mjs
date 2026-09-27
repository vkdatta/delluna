export const name="transition_chop";
export const id="dl_23072a50e0885aa1f1c0";
export const url=new URL("../icons/transition_chop.svg?v=33cb2cee1e565f2e05cc144b1b2dbb41a904fbf0f58e9e9d1d833c15912cfad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
