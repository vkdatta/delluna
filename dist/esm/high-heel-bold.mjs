export const name="high-heel-bold";
export const id="dl_5972db37eaf8428ea5f7";
export const url=new URL("../icons/high-heel-bold.svg?v=830fa467af5a95227afb0383e9c70c2cdb167b199cfc4e180bbcbf8366771e2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
