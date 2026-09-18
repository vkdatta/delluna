export const name="quick_reference";
export const id="dl_86ac1ba238cd44068cd1";
export const url=new URL("../icons/quick_reference.svg?v=40e21204e1b0c346222a83b1e1b7997b49552e4d3e3e4360bc694ab7b7a1e37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
