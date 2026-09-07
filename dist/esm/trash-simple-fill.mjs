export const name="trash-simple-fill";
export const id="dl_87d94605026e4bb782d9";
export const url=new URL("../icons/T/trash-simple-fill.svg?v=6d7d5276ad7d222a691a90762552c4c67be723d4526d6d3c8266aaf4af0d9bfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
