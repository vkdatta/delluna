export const name="server_person";
export const id="dl_1c53af85c1e16dfcd86e";
export const url=new URL("../icons/server_person.svg?v=54ad8d9eea2a049b02e8e001fb26bc23e92cf155170907c7486d00141fbd6dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
