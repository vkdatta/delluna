export const name="wifi-cog";
export const id="dl_924e752c066743e6bfd5";
export const url=new URL("../icons/wifi-cog.svg?v=4782379d4e8446c4f592ea92f5a7f43835a047e8781a0c1d0cbef3f4a99ce21f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
