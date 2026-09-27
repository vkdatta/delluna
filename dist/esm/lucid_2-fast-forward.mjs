export const name="lucid_2-fast-forward";
export const id="dl_7cb07f4ee85147dbbb89";
export const url=new URL("../icons/lucid_2-fast-forward.svg?v=73c506c3f459f293f3fd7375f0bcd40ea0c97381d5886ae39071aa96f8b4dc99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
