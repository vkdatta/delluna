export const name="watch_arrow_down";
export const id="dl_4c6c61a0a3e3950ab7ad";
export const url=new URL("../icons/watch_arrow_down.svg?v=2493d9d83573aac4ab997f5398cefc278020c3c7b62fa7b909f871928d0f8687",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
