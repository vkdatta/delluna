export const name="link-simple-horizontal-break-bold";
export const id="dl_abde19a1916e4efe89a9";
export const url=new URL("../icons/link-simple-horizontal-break-bold.svg?v=fb3911999a33c41d06b942bcee6356d419d11c8475cd1ad7c191b1cd978d49eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
