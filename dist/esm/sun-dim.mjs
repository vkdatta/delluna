export const name="sun-dim";
export const id="dl_21fabc86e67d41bab2ff";
export const url=new URL("../icons/sun-dim.svg?v=a217ba544297693db38925389f2d04852e1a6850ce11d7089853b525ecc0ed5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
