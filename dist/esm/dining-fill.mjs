export const name="dining-fill";
export const id="dl_2e3b498a71112f35a4a0";
export const url=new URL("../icons/dining-fill.svg?v=f7c65d46644bd3f4cb9fac41034a868660ba8e3d51f779acca2404c9bfb9e19e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
