export const name="infrared";
export const id="dl_f9131435bb87cc2da662";
export const url=new URL("../icons/infrared.svg?v=b48318168fe5fe6a48b515f494a6a183804ee59ecbefd1597fefb31c2534b0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
