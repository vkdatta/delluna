export const name="all_out";
export const id="dl_a15675fdf9219bec4934";
export const url=new URL("../icons/all_out.svg?v=ad5c0a5bd08ddf6d7381dedc4aaca35afe58eb3340852c6c387cf02d099d29f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
