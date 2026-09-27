export const name="neurology";
export const id="dl_e39714fabd8ba28fd91a";
export const url=new URL("../icons/neurology.svg?v=cbee041f47ae1cc9176ef59aa3f754fe8b397de5ae9a79ad9f6fd1e30fc21ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
