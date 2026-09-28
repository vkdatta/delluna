export const name="taxi-thin";
export const id="dl_f013b33585ef5f4fbbc0";
export const url=new URL("../icons/taxi-thin.svg?v=478ac8e4361e4cbaa724564d871053c8c59ecf17f460c5f4545dfc72e9e30000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
