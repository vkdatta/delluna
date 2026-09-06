export const name="moped-front";
export const id="dl_42761abc653a4261acb6";
export const url=new URL("../icons/moped-front.svg?v=3974055df6e20289c8998b2f9610684ef6d73e0a0039f25323368be301d4fadb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
