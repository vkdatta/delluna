export const name="bell-simple-z";
export const id="dl_297eb35a1ea74975bf89";
export const url=new URL("../icons/bell-simple-z.svg?v=dcc893b4544ea12c94e8ddfb04cec4d657ab83a7ecf8cbc34dca1919f3850eb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
