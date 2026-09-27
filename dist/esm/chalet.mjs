export const name="chalet";
export const id="dl_577a416f33249ad3d1bc";
export const url=new URL("../icons/chalet.svg?v=694f1fd22ad0f8e7d91b2c69ab2553fe4ce1f2c757650eb33592d2cbfacd4450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
