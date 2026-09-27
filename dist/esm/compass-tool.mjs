export const name="compass-tool";
export const id="dl_cb1218a44d3e46319dab";
export const url=new URL("../icons/compass-tool.svg?v=28b0e525f0d2e7faf9860bdad3bdcdd73d1e4ad462cf60fa2596f9d1f2f74646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
