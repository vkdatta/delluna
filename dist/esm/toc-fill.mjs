export const name="toc-fill";
export const id="dl_68f0b5091a150eb9702e";
export const url=new URL("../icons/toc-fill.svg?v=25528956f64dfaa7b71dcd553053d8227aad379286b72d18ba25d8a100f5959a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
