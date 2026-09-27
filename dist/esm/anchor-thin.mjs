export const name="anchor-thin";
export const id="dl_cdabf429e48e4b32af37";
export const url=new URL("../icons/anchor-thin.svg?v=9d374f4b107aa00afea6e5480105cd387953e097fbe45aeab894d9109a9b6247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
