export const name="military_tech";
export const id="dl_76cd8f06d7c641b0a5ad";
export const url=new URL("../icons/military_tech.svg?v=7c3a0e53eca9281dc74acbc5afbc8cc3a6f08fe619740c30914a70085774a55f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
