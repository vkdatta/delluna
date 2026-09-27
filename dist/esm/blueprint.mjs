export const name="blueprint";
export const id="dl_878bd2185cd942b08233";
export const url=new URL("../icons/blueprint.svg?v=849074c7b63901d575043747e79eadaecbc3801949f15b024588d71338e27b0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
