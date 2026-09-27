export const name="breaking_news";
export const id="dl_d17493716054ce921ae0";
export const url=new URL("../icons/breaking_news.svg?v=6c0fe171bf3915c7f90311ebabb0e6c88639f67cf75c3a85eb07858c7438f4bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
