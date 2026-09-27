export const name="file-js-bold";
export const id="dl_6e8c254acdfc4245aafd";
export const url=new URL("../icons/file-js-bold.svg?v=795d8d8ee4959b7bcd976e92e99e82449eaa2f875ca2eb75d54c1a3c4fed08b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
