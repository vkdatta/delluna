export const name="hard-drive-bold";
export const id="dl_ad9d46ee58db4783824a";
export const url=new URL("../icons/hard-drive-bold.svg?v=b59879cab754b77d89779f21fbfcffa4432bd970e9dc2e8e05bac23cac461789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
