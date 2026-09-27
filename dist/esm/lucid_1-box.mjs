export const name="lucid_1-box";
export const id="dl_708f51ff24dd44d1918d";
export const url=new URL("../icons/lucid_1-box.svg?v=946c1ddd6b9dba6b84d23565c05c73c617f6f28c9eb7f23a2a5cd722f40c953b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
