export const name="counter_1-fill";
export const id="dl_6e0579072c409b75edd0";
export const url=new URL("../icons/counter_1-fill.svg?v=de3e4f46f1c64983846565dbe795b54bd622ff98000b6e837b0966d7ef8481fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
