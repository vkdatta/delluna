export const name="pageless-fill";
export const id="dl_a8b70cc9b9df462ebc69";
export const url=new URL("../icons/P/pageless-fill.svg?v=47cc305fb7e03c074cd182f5a9a7f7fd1bfdfbd9811abaa281dd807b6b7e05cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
