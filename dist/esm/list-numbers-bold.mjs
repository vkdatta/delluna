export const name="list-numbers-bold";
export const id="dl_70701c2f2b994adcafe7";
export const url=new URL("../icons/list-numbers-bold.svg?v=311c31da9262702e3faf4a56fdbc40e1261964e48b61467f9e46ceecb6a59b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
