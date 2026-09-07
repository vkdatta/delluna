export const name="lucid_2-file-digit";
export const id="dl_bdc6218ec225400c99c1";
export const url=new URL("../icons/lucid_2-file-digit.svg?v=0fe252a8bf42dbba87d7f4b5b9bfa5e69be68227010469ed63d3b79cf3a7cc3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
