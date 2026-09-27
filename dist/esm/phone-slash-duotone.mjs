export const name="phone-slash-duotone";
export const id="dl_bd622b079db44ac99d70";
export const url=new URL("../icons/phone-slash-duotone.svg?v=b410906757606b5cad57064ce08d19d0f045264363c9dacfe79d4188ac64165a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
