export const name="lucid_3-panel-bottom";
export const id="dl_7e0e7e6eb75a454d8028";
export const url=new URL("../icons/lucid_3-panel-bottom.svg?v=4b8bb75abe6dd74185dc6edaa4f997fde81609e38f363c1547c5994098ae05d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
