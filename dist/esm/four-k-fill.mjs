export const name="four-k-fill";
export const id="dl_17477e6d9abd42f8b0e5";
export const url=new URL("../icons/four-k-fill.svg?v=6e35a1fe43c5b6347cc1468e1cface21abf7e55f47a867f8614390fdc8ce08a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
