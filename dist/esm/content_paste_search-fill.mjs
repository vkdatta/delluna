export const name="content_paste_search-fill";
export const id="dl_7fe630cc7f8f48d5afb0";
export const url=new URL("../icons/content_paste_search-fill.svg?v=2aa2aba649abc8663de5445508ce27d99d0036861c229fb1a61f1c3a191d916c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
