export const name="address-book-tabs-thin";
export const id="dl_77dfca76f7134f218cd8";
export const url=new URL("../icons/address-book-tabs-thin.svg?v=1898abc0ab34c908f3a1c4549ce2681ffabefaa3c46229291b5bf6db60b052b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
