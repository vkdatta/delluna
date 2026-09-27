export const name="arrows-vertical-bold";
export const id="dl_19e0bc935a8a4b86a478";
export const url=new URL("../icons/arrows-vertical-bold.svg?v=95453885b97301713f293f3eff3940110bd4fb34d25c35657588120305599c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
