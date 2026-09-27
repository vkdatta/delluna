export const name="lucid_1-clock-5";
export const id="dl_e542410c6cbf467b873e";
export const url=new URL("../icons/lucid_1-clock-5.svg?v=1fb5b9d2f59af40bbc426cc307b0048aa4798121e86731ed3d91a5170967c31a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
