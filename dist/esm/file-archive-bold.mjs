export const name="file-archive-bold";
export const id="dl_996a4aa506484cd5a49f";
export const url=new URL("../icons/file-archive-bold.svg?v=1668b34e17d1f1c28af27934c604a85f53db0fc2e13d6596eea3c5036b53bea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
