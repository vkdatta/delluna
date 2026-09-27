export const name="arrows-in-cardinal-thin";
export const id="dl_e96978e13ab94346830a";
export const url=new URL("../icons/arrows-in-cardinal-thin.svg?v=10d6c2735c3b631c9ca0cf6e4b7f66cc26b7fa9648856f5575bd232331da006d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
