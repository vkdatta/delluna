export const name="lucid_2-feather";
export const id="dl_1d2297fb1d604ab6853f";
export const url=new URL("../icons/lucid_2-feather.svg?v=49ab1f3708a75cc02bb4675c2ddcbf73f685bb5c0c58a78afb7f536f0dbf2083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
