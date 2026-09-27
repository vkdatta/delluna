export const name="caret-circle-double-up-bold";
export const id="dl_40230a50018e40cb819e";
export const url=new URL("../icons/caret-circle-double-up-bold.svg?v=57c32e38180e0fc487b2404cc42c28586a11000bc227283b26612ca3ae7d22a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
