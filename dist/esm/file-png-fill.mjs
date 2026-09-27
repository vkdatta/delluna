export const name="file-png-fill";
export const id="dl_1a913d16edbc40dfbdba";
export const url=new URL("../icons/file-png-fill.svg?v=559c539f13136200fa23683eaf891ff0268458dd3381869c0d57eee3bc0486e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
