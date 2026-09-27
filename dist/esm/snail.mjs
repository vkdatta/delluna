export const name="snail";
export const id="dl_958ada1c82c7d15929a4";
export const url=new URL("../icons/snail.svg?v=1c7d6b98abc653690160fa4b1633daf76d01622ae97ec8c3f7ee1ad6414748f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
