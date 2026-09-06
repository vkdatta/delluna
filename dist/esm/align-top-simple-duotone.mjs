export const name="align-top-simple-duotone";
export const id="dl_8f8f042a00a8496aa83c";
export const url=new URL("../icons/align-top-simple-duotone.svg?v=c4affc709d4572d6b07777585ac3a7b6b57f24a712daeb36d0637c8d08994d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
