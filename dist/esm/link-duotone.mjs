export const name="link-duotone";
export const id="dl_a37b16cb97e74f03adee";
export const url=new URL("../icons/link-duotone.svg?v=2a65aa332e0b964204c6f10b5c67b1d3c8fe1a8f55ab8f2feda41578a50ac886",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
