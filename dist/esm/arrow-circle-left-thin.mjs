export const name="arrow-circle-left-thin";
export const id="dl_435475120c034368a871";
export const url=new URL("../icons/arrow-circle-left-thin.svg?v=e04fa57481f9dd06f1b92bbb29c3debf8af74854431daf525e2ca91b60fe90e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
