export const name="rounded-plus";
export const id="dl_daa4040e08d04df522ac";
export const url=new URL("../icons/rounded-plus.svg?v=c38098bb729833b391d9192dec80f2e971e6c88ec579b6e9de0ecd393dc3048d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
