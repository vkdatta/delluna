export const name="reddit-logo-duotone";
export const id="dl_3a448ddc92884b6583b7";
export const url=new URL("../icons/reddit-logo-duotone.svg?v=7aceedb004b306344c72510cdc99f6415ea7194ef51dbdf9ae39c6bfee748044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
