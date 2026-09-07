export const name="umbrella-simple-duotone";
export const id="dl_25e03d951cae42d9ae83";
export const url=new URL("../icons/U/umbrella-simple-duotone.svg?v=77e9562dacee5c8a3751f0c5f9432f1288cf8bc0658c717d5f0619e200739202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
