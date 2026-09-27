export const name="ripples";
export const id="dl_7e8f9e538cc2fc8b6978";
export const url=new URL("../icons/ripples.svg?v=7a20d8881a07d7f5ccfdb4488eeebdfeeb053630db066de413e0bb65b0831c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
