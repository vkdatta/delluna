export const name="caret-circle-double-right-thin";
export const id="dl_cd6a0a417596447891f8";
export const url=new URL("../icons/caret-circle-double-right-thin.svg?v=b304cc580d7452e18ce56685753b4ddfe9b1037cf6a9eb215d73ac198bd6e4d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
