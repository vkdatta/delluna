export const name="gear-bold";
export const id="dl_98e688caa6204bb2a269";
export const url=new URL("../icons/gear-bold.svg?v=9c2a683ab2f0c363f4b114f3943e48fab8dcc765c69c42c28b7e7286776404ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
