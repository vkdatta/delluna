export const name="watch_button";
export const id="dl_56271db732c03b256fc0";
export const url=new URL("../icons/watch_button.svg?v=2f29be02679e9cd47bc829f8a929ec7773e31d140126869233c3bcecc686b636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
