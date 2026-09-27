export const name="bell-simple-z";
export const id="dl_297eb35a1ea74975bf89";
export const url=new URL("../icons/bell-simple-z.svg?v=4768d8c87e62c27508ccf8623459fe76dfe5da9661eeedc019a2277f704fe2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
