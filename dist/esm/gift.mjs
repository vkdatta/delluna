export const name="gift";
export const id="dl_4e59b39a6bc9474eab8d";
export const url=new URL("../icons/gift.svg?v=4791580b9aea1e26f0c38d794706bd9dbabd0ab5db3aff81fe25665c01b672f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
