export const name="gear-six-light";
export const id="dl_a791a525085a483fb6b3";
export const url=new URL("../icons/gear-six-light.svg?v=23a1df75f6dbf685274f0f1f3752562d16039ff6363a2136c503cd4f54f219f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
