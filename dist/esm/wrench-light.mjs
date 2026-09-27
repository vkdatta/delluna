export const name="wrench-light";
export const id="dl_f0cae15cc74e3c44de45";
export const url=new URL("../icons/wrench-light.svg?v=b3d1ee11211103941914ac8f6aeff6df5fdd6bbd207287de142e2b6b97c24e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
