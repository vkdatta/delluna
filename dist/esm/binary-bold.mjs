export const name="binary-bold";
export const id="dl_8d3c64d2893c49e9bd53";
export const url=new URL("../icons/binary-bold.svg?v=034dc2a53edd6e8cd6e3a3a6ca20b71cf9bbd803418412d7e3b09d8e7a6965c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
