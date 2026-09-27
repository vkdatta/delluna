export const name="lucid_2-drum";
export const id="dl_c68e07fac3b148f482a5";
export const url=new URL("../icons/lucid_2-drum.svg?v=822443475ccc635643225aea3ebe5b4d47ce9279db664cd7fe15590900768e07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
