export const name="suitcase-fill";
export const id="dl_e9a291f5787f6649ed9e";
export const url=new URL("../icons/suitcase-fill.svg?v=fea2cb9245d149c62362ac253b53594e000027a05018247a3952f3cda6453125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
