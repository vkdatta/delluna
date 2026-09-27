export const name="sun-dim-light";
export const id="dl_4977b2130bd72f963111";
export const url=new URL("../icons/sun-dim-light.svg?v=3f6771f27806d7c96257dc20b7ce9341f3d9abd71ba25ec9cc72803db1187abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
