export const name="http";
export const id="dl_303e37c472b15e247e50";
export const url=new URL("../icons/http.svg?v=82d3352c141895b369b17cce286a58ff1e68482072072c1eea7d2bd893deb831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
