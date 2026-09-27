export const name="square-minus";
export const id="dl_4accee062c114ff78f8b";
export const url=new URL("../icons/square-minus.svg?v=a450965b3c6115da1d679cfec1a8b730e88ef8ea9b2f97a5d03e9bde0de5843b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
