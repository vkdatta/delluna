export const name="bluetooth-slash-bold";
export const id="dl_c91da3311d664601ab31";
export const url=new URL("../icons/bluetooth-slash-bold.svg?v=b460a1d3072b2a8d6b0dda948691776e7852e49339220741bd80f37051516f09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
