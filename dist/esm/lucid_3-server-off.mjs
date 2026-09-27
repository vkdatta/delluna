export const name="lucid_3-server-off";
export const id="dl_fef5953dddb3465d8c13";
export const url=new URL("../icons/lucid_3-server-off.svg?v=4f146914190d93f12959d06e76853eb0b92433d5e5a62d5c5acc31fa3252df0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
