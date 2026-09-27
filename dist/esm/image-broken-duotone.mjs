export const name="image-broken-duotone";
export const id="dl_c5b29a936ce64e9bb058";
export const url=new URL("../icons/image-broken-duotone.svg?v=c57d623f15605d8669eed224dc7e5fb50b3e6127432ba6d7fbfa721c844cef6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
