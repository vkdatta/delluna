export const name="floppy-disk-bold";
export const id="dl_3459783772d84e2ca811";
export const url=new URL("../icons/floppy-disk-bold.svg?v=387075bd634853763525f10284756414dbad3e2e0d2b86397889ad30aa2f3a8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
