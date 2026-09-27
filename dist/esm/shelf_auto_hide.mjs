export const name="shelf_auto_hide";
export const id="dl_cc84b7b6f329d68cf8b5";
export const url=new URL("../icons/shelf_auto_hide.svg?v=628977577632766de071e8e186f26b3fc7b9c0079617222e644a24cc090252a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
