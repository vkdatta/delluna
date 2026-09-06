export const name="clipboard-text-light";
export const id="dl_0540c8a56d3442299dae";
export const url=new URL("../icons/clipboard-text-light.svg?v=ba672e04dca5659ec3be7b831fd759fa072e89175796ee526a1e3d5bf48080e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
