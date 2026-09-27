export const name="page_info";
export const id="dl_0fb1d44283ea82a37875";
export const url=new URL("../icons/page_info.svg?v=509fb75a6182f5df5bc214794963792943b3197dc72fa3201f12b83b118cc62a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
