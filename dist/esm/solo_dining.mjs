export const name="solo_dining";
export const id="dl_6f5f6fe11aabe685d4ac";
export const url=new URL("../icons/solo_dining.svg?v=50611d52adcc08ae51b953efd1960ccdde0a5a69c0ac5192f899906af8f0834e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
