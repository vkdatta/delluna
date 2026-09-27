export const name="lucid_2-hand-grab";
export const id="dl_3da1836884484263b10a";
export const url=new URL("../icons/lucid_2-hand-grab.svg?v=11341b66970a34758bea688af7266c6855d4c0901392900d18028b11ff37b634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
