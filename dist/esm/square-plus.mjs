export const name="square-plus";
export const id="dl_ff975f123c664860871d";
export const url=new URL("../icons/square-plus.svg?v=605c04039345f585af104d7b545ff7b28fccf792748815b4be681cca4a168c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
