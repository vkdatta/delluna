export const name="file-archive-bold";
export const id="dl_996a4aa506484cd5a49f";
export const url=new URL("../icons/file-archive-bold.svg?v=5c1c857803f194adba3f11dca383e6ca31737de8f09fb7608ca8ba04a984fa9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
