export const name="flag_check-fill";
export const id="dl_f4d632254fc2bff32b9e";
export const url=new URL("../icons/flag_check-fill.svg?v=7792a66a3e5b3855e061e8b83858aef31da4bb527affee75111707dec65f337d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
