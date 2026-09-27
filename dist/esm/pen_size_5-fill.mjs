export const name="pen_size_5-fill";
export const id="dl_adbd177e5d857473e32f";
export const url=new URL("../icons/pen_size_5-fill.svg?v=cb455e78fd4bf035dfc3ca56c38169a53fa907b9a48c053e3c609d083b6bf2b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
