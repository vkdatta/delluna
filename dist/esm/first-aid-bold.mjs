export const name="first-aid-bold";
export const id="dl_805ebc239a0642e1845e";
export const url=new URL("../icons/first-aid-bold.svg?v=0d0896f987a3ec4103e4281b376e451cb92b08ce14f1aa170690b3f0987bcd05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
