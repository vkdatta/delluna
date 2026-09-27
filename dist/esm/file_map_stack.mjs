export const name="file_map_stack";
export const id="dl_f125c9d860e1935db30a";
export const url=new URL("../icons/file_map_stack.svg?v=28b464b2893cc3632b548a01bcb8b136b7b0d3b919217ae02aa0ab38c59418f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
