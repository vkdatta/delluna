export const name="sphere-thin";
export const id="dl_e448cd263cce47cabb10";
export const url=new URL("../icons/S/sphere-thin.svg?v=8f26fa48fcfc1e58f1cec03fbb8a21b921116e69fc97796e80df60933f31a212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
