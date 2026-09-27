export const name="address-book-light";
export const id="dl_7a9681572a334d3a86b0";
export const url=new URL("../icons/address-book-light.svg?v=02a3aacb20105ffab63bc3670b8a0731e97df2166ea7f1cfe047e25068bf8f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
