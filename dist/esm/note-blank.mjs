export const name="note-blank";
export const id="dl_c4b3185d57b747ee87e9";
export const url=new URL("../icons/note-blank.svg?v=f067dc46ec3ae24a75683c2b10c0eee6b148ce66b7a016094df922821dbe857c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
