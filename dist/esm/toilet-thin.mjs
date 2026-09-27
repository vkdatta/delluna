export const name="toilet-thin";
export const id="dl_12ce06fb6b0776a3bbe2";
export const url=new URL("../icons/toilet-thin.svg?v=fafef9f56d39759c777119b7ac1c564818de9a271d37e4ee4bca59df5154b8ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
