export const name="counter_4";
export const id="dl_1d6828c786d312428fa9";
export const url=new URL("../icons/counter_4.svg?v=3d9815a47e0ee5a6f994fee069593fc607ca4d1edbb493e8049a0eca43ca4b3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
