export const name="business_chip-fill";
export const id="dl_647ca5d483c0e6c6356e";
export const url=new URL("../icons/business_chip-fill.svg?v=c5fdad930f54202af3e531c6547c333d588601b609eb3742c9c1c53ee8dcf05e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
