export const name="bluetooth-slash-fill";
export const id="dl_0419b33f30f7442e8615";
export const url=new URL("../icons/bluetooth-slash-fill.svg?v=67aeba8c487b099eb8a1e8fa9c70313033c5f74220e9abd20a0b5d607962067e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
