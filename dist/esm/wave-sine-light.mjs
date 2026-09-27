export const name="wave-sine-light";
export const id="dl_1fb872b134c12654018b";
export const url=new URL("../icons/wave-sine-light.svg?v=ea2fe4804b1004887948095e5404fd64763c57c4d9d911787b9bea4f998eb94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
