export const name="orange-slice-bold";
export const id="dl_8297225d063e42ddaf04";
export const url=new URL("../icons/orange-slice-bold.svg?v=c6e336b42fe442b64ef5205dbe8a729a6ea61c2c6d2ffd0892bb36186bad5b8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
