export const name="infinity-duotone";
export const id="dl_965b991d21064fe09845";
export const url=new URL("../icons/infinity-duotone.svg?v=c88286e998825a0444078660fff4085bd8de54098412103bf36af5bd6fcd2064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
