export const name="number-five-fill";
export const id="dl_827bb16edcb84d96ae55";
export const url=new URL("../icons/number-five-fill.svg?v=248db248ad5b1246993ef9a71cadb35b46d929212c491fb64303bd521c78f5aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
