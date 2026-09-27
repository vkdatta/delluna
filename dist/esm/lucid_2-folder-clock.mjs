export const name="lucid_2-folder-clock";
export const id="dl_947bf4bd4eee426e8077";
export const url=new URL("../icons/lucid_2-folder-clock.svg?v=2a2ddaeef7e9cb7fa8bf260d747175305ebee3110924abbf138b09520b81f60e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
