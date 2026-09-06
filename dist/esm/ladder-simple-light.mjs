export const name="ladder-simple-light";
export const id="dl_1ded6f1878ee49e08ed9";
export const url=new URL("../icons/ladder-simple-light.svg?v=ba8264371369b511cb15a2d8c111ed5a8ee86e6ddfb5ac3e2941f62bdab9070e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
