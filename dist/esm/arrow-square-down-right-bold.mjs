export const name="arrow-square-down-right-bold";
export const id="dl_570894301d06477a930f";
export const url=new URL("../icons/arrow-square-down-right-bold.svg?v=144a19067ec43a6e3902e1297e3afe9e98713058f3a7b5bdbee0f593264c1055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
