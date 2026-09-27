export const name="user-bold";
export const id="dl_2981a30f82b78a1e3445";
export const url=new URL("../icons/user-bold.svg?v=c3bd99b16eb8323e71f3c8aa1147768accb0ae2a4f7acb407e66eae8ca24329d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
