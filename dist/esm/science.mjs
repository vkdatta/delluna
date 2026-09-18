export const name="science";
export const id="dl_83dfb4f2e41543bbaf52";
export const url=new URL("../icons/science.svg?v=26da8a8de2e4bd587451e35e10e45c6d944c171e9ca545494aba741c90d4cf5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
