export const name="building-thin";
export const id="dl_2b8eb98c4f074f0c9af3";
export const url=new URL("../icons/building-thin.svg?v=25aece51866c38c75b7d9ccc2342fa74e8ab16974b83c34b0165382ad9fdb1fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
