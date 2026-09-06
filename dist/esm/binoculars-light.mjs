export const name="binoculars-light";
export const id="dl_e1b4eed64662409b90f6";
export const url=new URL("../icons/binoculars-light.svg?v=07fbbaf19a5f287dcebf8c76d940bf9083d18b8604eb29e6f3f8761a3e974b53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
