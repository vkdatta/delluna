export const name="codepen-logo-bold";
export const id="dl_5a90f9eb0c0a4d0b9559";
export const url=new URL("../icons/codepen-logo-bold.svg?v=1e63c28d733a3b1a5399ac034699c7d89b2e74b6612a773214594a63b90f04da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
