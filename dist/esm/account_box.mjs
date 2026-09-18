export const name="account_box";
export const id="dl_2c6e9d9d20f74cbfba53";
export const url=new URL("../icons/account_box.svg?v=89dbc9dcf6978e9775e8bfc6c0f5ad790a71fc5bb6f06f4cb3c7fb8921a67126",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
