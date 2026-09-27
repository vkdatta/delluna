export const name="sun-dim-light";
export const id="dl_1f2d0a93d756a9f8e338";
export const url=new URL("../icons/sun-dim-light.svg?v=49cbdc8fae6dcc4f283ef33a7f16f33a48825d2a8fbb291c5b4af9b87f7893dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
