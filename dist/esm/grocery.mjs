export const name="grocery";
export const id="dl_1e78e4ec132d40bbb843";
export const url=new URL("../icons/G/grocery.svg?v=ddfdabb4c7d6380ef67cb76071625bc93a1dbc7099805a99b6b307d6994b0422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
