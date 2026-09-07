export const name="taxi-thin";
export const id="dl_b7bfb80b749c4e859623";
export const url=new URL("../icons/T/taxi-thin.svg?v=478ac8e4361e4cbaa724564d871053c8c59ecf17f460c5f4545dfc72e9e30000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
