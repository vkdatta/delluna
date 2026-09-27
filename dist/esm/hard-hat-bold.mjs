export const name="hard-hat-bold";
export const id="dl_caf0746868ea400dadfc";
export const url=new URL("../icons/hard-hat-bold.svg?v=88defff9801f72ef58c59cf7e3baa1a79719307e61b81daa838f527662240f54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
