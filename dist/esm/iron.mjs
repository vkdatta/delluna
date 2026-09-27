export const name="iron";
export const id="dl_a814cf90c6fc568b8646";
export const url=new URL("../icons/iron.svg?v=a8a9ba6d5e38dee730de4541b3a436047df2f41b258f0bc78cae53ab4b14e7b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
