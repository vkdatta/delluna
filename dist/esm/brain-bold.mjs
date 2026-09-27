export const name="brain-bold";
export const id="dl_27e449eb6ff1448ea752";
export const url=new URL("../icons/brain-bold.svg?v=fb1025a2016a84b3a1aeaeeb7aef952b13b8e12dbef51ddd93a2ab7ad0665772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
