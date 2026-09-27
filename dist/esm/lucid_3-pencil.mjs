export const name="lucid_3-pencil";
export const id="dl_d9012e6e9d60493abfa9";
export const url=new URL("../icons/lucid_3-pencil.svg?v=59cf75754ad1291d049704748cb5fe447254f6faec1f60452c8c758f543620a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
