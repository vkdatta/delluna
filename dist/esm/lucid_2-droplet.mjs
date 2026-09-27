export const name="lucid_2-droplet";
export const id="dl_32c0283d29b342b8a50c";
export const url=new URL("../icons/lucid_2-droplet.svg?v=4c6e01d5457ee2ffb89bc5adef044d5cc2485fe3f67e8822f45d8fa813433e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
