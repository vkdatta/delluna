export const name="police-car-light";
export const id="dl_36fd8f69c11f40769c8f";
export const url=new URL("../icons/police-car-light.svg?v=d104ddb98d6d017061943cf71e39823fdd64fae3ae71b2c3d13eba82052c55b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
