export const name="test-tube-thin";
export const id="dl_77563fa1b84949edfb35";
export const url=new URL("../icons/test-tube-thin.svg?v=19d9d327a7c43a9413cc506496079892caba1644f4995600f1db5d0cc091e102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
