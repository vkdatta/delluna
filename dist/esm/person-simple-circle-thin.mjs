export const name="person-simple-circle-thin";
export const id="dl_5ac5ebbf629f4297b4b1";
export const url=new URL("../icons/person-simple-circle-thin.svg?v=ac62bac513b97da05d979ec742fcede4906b4ed47291c655419ad81cd8149903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
