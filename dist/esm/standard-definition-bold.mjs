export const name="standard-definition-bold";
export const id="dl_4c27e9e512b1431b9540";
export const url=new URL("../icons/S/standard-definition-bold.svg?v=413bd4d2e3bf61644b7450b526a18ebc8198c2377ccbfe02c82cc0968c931467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
