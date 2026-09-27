export const name="bomb-bold";
export const id="dl_761fa84b40384fd0b403";
export const url=new URL("../icons/bomb-bold.svg?v=3eda07721f40ef912c2ac3dd8bbd9686110dbb1e8369c29b326b106c2d3391d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
