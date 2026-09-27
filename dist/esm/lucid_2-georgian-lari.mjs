export const name="lucid_2-georgian-lari";
export const id="dl_2634d65e5d63416a96eb";
export const url=new URL("../icons/lucid_2-georgian-lari.svg?v=46e1d1698150ba1cd7063e23d7d4445168d67f4045ce8ed7472dd19f0cc5f167",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
