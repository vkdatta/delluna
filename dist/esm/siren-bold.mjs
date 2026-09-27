export const name="siren-bold";
export const id="dl_952f993f8c567f78fff0";
export const url=new URL("../icons/siren-bold.svg?v=e75b74daf61905db963099952a22990a1bbffd599ab6b43edcf50060d301d165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
