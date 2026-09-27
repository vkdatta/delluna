export const name="line-vertical-bold";
export const id="dl_38d0b4c959bf4ae4a88f";
export const url=new URL("../icons/line-vertical-bold.svg?v=ac13e4e5177b459cde4954a537a193e2dbc7049932c251f4ea2c0478d8cee730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
