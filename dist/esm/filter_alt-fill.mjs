export const name="filter_alt-fill";
export const id="dl_7262d6ac7b773f38d7bb";
export const url=new URL("../icons/filter_alt-fill.svg?v=34e78af4fd0e9ecf218d760fad8651f4d8a79d0251bf155b9ed6a5f62e3058f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
