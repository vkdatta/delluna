export const name="linux-logo-fill";
export const id="dl_29d37238d2fb4c3e952d";
export const url=new URL("../icons/linux-logo-fill.svg?v=1ce32580b1ac4abdceb5fc865fbfdd58d44f4ddaac582830578a9c1a1d78ec53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
