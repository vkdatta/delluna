export const name="lucid_3-radical";
export const id="dl_77bdb454d04a4939a122";
export const url=new URL("../icons/lucid_3-radical.svg?v=593a7f0596486dab4fc0150cebce819f392a1eee155cf70d69312bd7bc3e5658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
