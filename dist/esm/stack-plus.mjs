export const name="stack-plus";
export const id="dl_ad22ba94bd6f459b8218";
export const url=new URL("../icons/S/stack-plus.svg?v=91c2878e6e8bbf8aca7d67e69645bda8d14d006a0afac2eb9b4a60e6c5eab91d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
