export const name="folder-lock-fill";
export const id="dl_e4853431e9d64642b8ee";
export const url=new URL("../icons/folder-lock-fill.svg?v=f544487ea36642813252e44c515072c9c5ec06292a8a931a7a2889938abbdb32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
