export const name="bookmarks-thin";
export const id="dl_211d43ea14da4cdc8b3a";
export const url=new URL("../icons/bookmarks-thin.svg?v=f5c27b899cf79ce1da15e1b1041bcb4dbe37fec7243b0089513df770c0f9d416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
