export const name="add_call";
export const id="dl_efbd92be35b045c098bf";
export const url=new URL("../icons/A/add_call.svg?v=b33e6599666c438067b5be1a9c770df1d2dd4e1816b110d1b11d661b838d44d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
