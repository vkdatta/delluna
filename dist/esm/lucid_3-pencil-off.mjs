export const name="lucid_3-pencil-off";
export const id="dl_030ef307d1694b44a497";
export const url=new URL("../icons/lucid_3-pencil-off.svg?v=b4a04c06aec8de3ac055b04dd435699df42b1b180ada309c066943d02236c818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
