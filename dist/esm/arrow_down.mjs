export const name="arrow_down";
export const id="dl_1e99141b592da20e83b8";
export const url=new URL("../icons/arrow_down.svg?v=3ef1dc4ff97942cb3df85cc2f4e59a0a2521cd85b8f8cba6c94c9bb9e42c07eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
