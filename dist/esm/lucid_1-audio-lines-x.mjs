export const name="lucid_1-audio-lines-x";
export const id="dl_ec9119c9bc7945cea63c";
export const url=new URL("../icons/lucid_1-audio-lines-x.svg?v=f23c1da233bc03c1957c9fc0756323e3ae3c78887a5e289f6b4000f9eca7b071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
