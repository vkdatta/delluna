export const name="lucid_2-layout-panel-left";
export const id="dl_07ef1d07a87c4a199831";
export const url=new URL("../icons/lucid_2-layout-panel-left.svg?v=d6bea12550ee5853488391667bbe7e090e16237c45d0506b8268196be22afacd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
