export const name="chair-light";
export const id="dl_135fd56416da487d975b";
export const url=new URL("../icons/chair-light.svg?v=7796769c3a94bd3aa46ff073214a1132720677a940cc5be719d9f1663937512d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
