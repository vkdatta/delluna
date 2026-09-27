export const name="magnet-bold";
export const id="dl_7f41931ddb3a4bb3836f";
export const url=new URL("../icons/magnet-bold.svg?v=0d30b8bcee3e0e097429f2a55da384b6a95033e4c35eda64f80901250842c94d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
