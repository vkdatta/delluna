export const name="lucid_2-droplet";
export const id="dl_32c0283d29b342b8a50c";
export const url=new URL("../icons/lucid_2-droplet.svg?v=9e1adbf129b51a0da9321b51f1ef6ba9cf54d355bf3a12e0e6d666a05e608ef9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
