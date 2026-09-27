export const name="10mp";
export const id="dl_908f83965570c7a10a00";
export const url=new URL("../icons/10mp.svg?v=5a4c61733a86748f82e4b8444d95d6c81d2810b051f3161bfff7a9118937fb24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
