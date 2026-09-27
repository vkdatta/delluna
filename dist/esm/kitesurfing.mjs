export const name="kitesurfing";
export const id="dl_97d8cdc84f883e6434e6";
export const url=new URL("../icons/kitesurfing.svg?v=925f1cf1cb2557630ce9efa276851946875f5a944ef0bb40abe51f2cfd85ee0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
