export const name="cell-signal-none";
export const id="dl_c9496c7fc12c42279cd9";
export const url=new URL("../icons/cell-signal-none.svg?v=75f2b661b96c1d0de799643e4fd591fc185c725c19db59a2e42b0248a4c52748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
