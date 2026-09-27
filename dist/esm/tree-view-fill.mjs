export const name="tree-view-fill";
export const id="dl_4513c84befc59298a527";
export const url=new URL("../icons/tree-view-fill.svg?v=72d2e76753c4b7c7753a61cb2fe769a663618ba365260c08d6f356cd6d10cee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
