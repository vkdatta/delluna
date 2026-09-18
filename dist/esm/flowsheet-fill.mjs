export const name="flowsheet-fill";
export const id="dl_3dc79c851218497c9660";
export const url=new URL("../icons/flowsheet-fill.svg?v=85c4270ab761ab21024138bbaecf87ba85058d73bcc74b86fdf0be6341bfd9db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
