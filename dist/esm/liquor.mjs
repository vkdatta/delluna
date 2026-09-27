export const name="liquor";
export const id="dl_55fee56513d863449f8a";
export const url=new URL("../icons/liquor.svg?v=04ec5b28c3403d49009086f9c3bb3d2165404a0cfe64a25084e40241f0e04868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
