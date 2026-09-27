export const name="lucid_1-chevron-last";
export const id="dl_5a08b9a6a63542cd9512";
export const url=new URL("../icons/lucid_1-chevron-last.svg?v=fcfb99eb3c889f7ae51814e1536c44967df3e592a85b425bfee94912fff220f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
