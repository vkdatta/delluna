export const name="cheer";
export const id="dl_e8d4beb18cf1c9e2b368";
export const url=new URL("../icons/cheer.svg?v=515023b6508ebf002e17497cc346afdf78b6107456db11e7493758a955d6ddc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
