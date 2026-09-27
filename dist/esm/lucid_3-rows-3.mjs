export const name="lucid_3-rows-3";
export const id="dl_7eda0e258fea442cb9fe";
export const url=new URL("../icons/lucid_3-rows-3.svg?v=4e3fa684a86b7805c22949d756b09186c7f57a4e03d80103e0ce42dc646457eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
