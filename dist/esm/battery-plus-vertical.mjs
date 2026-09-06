export const name="battery-plus-vertical";
export const id="dl_0420e202a310470cb765";
export const url=new URL("../icons/battery-plus-vertical.svg?v=009cf1145d9e9871925e7d0a6f168fd9932635874483f1c216cd2ddf9dcd1e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
