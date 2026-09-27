export const name="lucid_2-file-pen-line";
export const id="dl_39ad5fa48be34fb29639";
export const url=new URL("../icons/lucid_2-file-pen-line.svg?v=dbed3623eaeb3465303d8676279842e6294064bcc0b110f451e250649aacab28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
