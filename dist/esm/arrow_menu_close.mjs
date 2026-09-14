export const name="arrow_menu_close";
export const id="dl_a330a0d370ac4b7da7c5";
export const url=new URL("../icons/A/arrow_menu_close.svg?v=f67dc3cdda11addc296f88834e7548b62e91982208b90d6cf619c2ee62c920fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
