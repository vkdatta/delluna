export const name="lucid_2-file-pen";
export const id="dl_fa7c975587914e9fb1fb";
export const url=new URL("../icons/lucid_2-file-pen.svg?v=996566bb07617184d56abd5243cf1d14d3f7e01d35b94694f8dc685be8500ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
