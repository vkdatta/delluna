export const name="text-aa-bold";
export const id="dl_6c8bf4c8a6f5730ee2d6";
export const url=new URL("../icons/text-aa-bold.svg?v=40e863bf7e9ab045399aee81f2436baeba7f0ec32cc1cfb7fd4e2f8cc7d7e987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
