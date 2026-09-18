export const name="hive";
export const id="dl_730a0de7b6aa4e608ce9";
export const url=new URL("../icons/hive.svg?v=d36dd0b0dc213b869a5e801ee7363c7f4a53083e9c8e68dd288a4c762c23f909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
