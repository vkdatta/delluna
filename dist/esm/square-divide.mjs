export const name="square-divide";
export const id="dl_4dbb1f0b2e99429799c7";
export const url=new URL("../icons/square-divide.svg?v=a234d4f9aaeaeb488cdebc2f8d3672d2e26ee63f73593c87d8a01087700532d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
