export const name="sanitizer";
export const id="dl_39d5cc8c0d04b6d3604b";
export const url=new URL("../icons/sanitizer.svg?v=4a9ab26fe74076d93ded83130451df1668548ca22833d71a679ac9dbfb7f32d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
