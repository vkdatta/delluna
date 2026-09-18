export const name="pregnancy-fill";
export const id="dl_5bd9c4c46c174366a89f";
export const url=new URL("../icons/P/pregnancy-fill.svg?v=172f483dd75258335d968c89c8217913096d5f4a9c9227cb7d3eda08a03f5e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
