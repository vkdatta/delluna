export const name="text-t-thin";
export const id="dl_aa661941319d76c7487c";
export const url=new URL("../icons/text-t-thin.svg?v=fb7ad7afb351dc3fbcefc4d301330cde0bc87d879461a396cbc41be98a9c1240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
