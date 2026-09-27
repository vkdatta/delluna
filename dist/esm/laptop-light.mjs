export const name="laptop-light";
export const id="dl_6ff22c8ca106403b9b8a";
export const url=new URL("../icons/laptop-light.svg?v=18ea528c289b0d1ee73ae537e5dae7d5de1bf9ff8d0f974acb42b77593fb05a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
