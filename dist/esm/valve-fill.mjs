export const name="valve-fill";
export const id="dl_657a2cc7458bbcc715fe";
export const url=new URL("../icons/valve-fill.svg?v=6922d7cd38c6f688eb44dec84d0f7c7e33825e73b3e984ccd1aefd20a780ea37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
