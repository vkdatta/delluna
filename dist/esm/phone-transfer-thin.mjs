export const name="phone-transfer-thin";
export const id="dl_515f5ca072814bb1936c";
export const url=new URL("../icons/phone-transfer-thin.svg?v=996d45fa79e5ed27211c6aae7037ebc3754eb8c133ca9e6670a2dce08fde9794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
