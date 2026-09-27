export const name="mic-fill";
export const id="dl_d1c9534b535508ab2e71";
export const url=new URL("../icons/mic-fill.svg?v=d671fe4b4856447752f80c673cb02bdabe075321643bbe3a6549d5112e648038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
