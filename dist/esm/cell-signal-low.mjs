export const name="cell-signal-low";
export const id="dl_f4837b200e22487cbc7c";
export const url=new URL("../icons/cell-signal-low.svg?v=fe5b8fb7621eed2b4cf92eb10dd3c6d60428834a82e915a490697bcd5254f7c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
