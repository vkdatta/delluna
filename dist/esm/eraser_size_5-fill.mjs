export const name="eraser_size_5-fill";
export const id="dl_162e0d4b961ec7930c4d";
export const url=new URL("../icons/eraser_size_5-fill.svg?v=62865a9a447cafb32cf302e8be587d6c2ea911238922e6a1cd161f44c892d54a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
