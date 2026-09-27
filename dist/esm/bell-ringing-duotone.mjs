export const name="bell-ringing-duotone";
export const id="dl_bed497535e4b4ecaa4a3";
export const url=new URL("../icons/bell-ringing-duotone.svg?v=486a8cb1dc421f6d0e830aeacbcf1cc221902fd7b02e640536f580df2b8c5f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
