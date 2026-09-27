export const name="caret-circle-right-duotone";
export const id="dl_62b55e5c05524ab0bbed";
export const url=new URL("../icons/caret-circle-right-duotone.svg?v=a2b1b5e1e7bfb76826eeb7a6981135b6d8cbdc14fd68f9d10417a7e38e92ae0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
