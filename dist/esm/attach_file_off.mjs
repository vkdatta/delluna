export const name="attach_file_off";
export const id="dl_749eff68b3b6a91f95e2";
export const url=new URL("../icons/attach_file_off.svg?v=fa3c892390b46d2fa487ce431be294126ce211757d903518bde655dcd342777a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
