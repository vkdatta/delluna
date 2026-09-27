export const name="bluetooth-slash-bold";
export const id="dl_c91da3311d664601ab31";
export const url=new URL("../icons/bluetooth-slash-bold.svg?v=60f34736979243b8cf80fee1ec6c4ff2386ffd65aa410750f73c6d22e92558ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
