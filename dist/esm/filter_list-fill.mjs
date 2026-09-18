export const name="filter_list-fill";
export const id="dl_0269952b84c64a4fb56d";
export const url=new URL("../icons/filter_list-fill.svg?v=d069255c28a4997ba3b3343f065f8427017297e4a245c581a43b260bdf0dffe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
