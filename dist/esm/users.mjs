export const name="users";
export const id="dl_a367a7f09a59d591b5a3";
export const url=new URL("../icons/users.svg?v=218bdd710530a1d5078998f493fe449ad8a3589eea821f5afa55e30b5d357244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
