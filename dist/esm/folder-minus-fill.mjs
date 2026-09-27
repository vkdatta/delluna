export const name="folder-minus-fill";
export const id="dl_0618795e50084ee1a605";
export const url=new URL("../icons/folder-minus-fill.svg?v=794705cc936b42b8b4331b52b9b40c3bb870067e584cdaf4db5ce1b6b4a01edc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
