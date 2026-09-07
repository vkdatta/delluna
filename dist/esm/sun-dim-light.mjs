export const name="sun-dim-light";
export const id="dl_c616e0f7300c45d3b1d6";
export const url=new URL("../icons/S/sun-dim-light.svg?v=3f6771f27806d7c96257dc20b7ce9341f3d9abd71ba25ec9cc72803db1187abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
