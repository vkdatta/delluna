export const name="note-blank-light";
export const id="dl_ec4f573ece3a40f7985b";
export const url=new URL("../icons/note-blank-light.svg?v=30214ee4d287ca96ab1fc520d78db6eef1f122e6d9c784569b1ad50eb443b0ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
