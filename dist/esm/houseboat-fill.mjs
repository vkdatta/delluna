export const name="houseboat-fill";
export const id="dl_3f20d37abba47be65286";
export const url=new URL("../icons/houseboat-fill.svg?v=2127a5e9d8e2e2dc2a895927cf6fb47baedcbc6a543a750b58dcd34513bd3731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
