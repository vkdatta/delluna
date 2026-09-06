export const name="number-circle-three-thin";
export const id="dl_3f47c4c5afb04a25ada1";
export const url=new URL("../icons/number-circle-three-thin.svg?v=7e63b3ea5ae10a34aa2fae5a14c6aeee964d497e645e4ee584696e926fe0cd90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
