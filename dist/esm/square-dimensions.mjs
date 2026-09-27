export const name="square-dimensions";
export const id="dl_fb75ab4ee9d042029282";
export const url=new URL("../icons/square-dimensions.svg?v=c9d1171241ea4f2f2a6bccc4d69a86193c7890a1e839ae5a30dba382dbbe3550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
