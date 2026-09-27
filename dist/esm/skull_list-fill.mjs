export const name="skull_list-fill";
export const id="dl_f9f381269d53e7cd9b2c";
export const url=new URL("../icons/skull_list-fill.svg?v=de2b50f0867d1259711123d801c5e1de4ae4a2ec8c9d474ba17298a6e65d1f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
