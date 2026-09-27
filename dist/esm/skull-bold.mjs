export const name="skull-bold";
export const id="dl_e5b89ee984bd9c9e05a2";
export const url=new URL("../icons/skull-bold.svg?v=82419e0e63bcaaf830b5d7eb83a1b9dce6bdf88355d49938843c5bd878960904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
