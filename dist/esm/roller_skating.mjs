export const name="roller_skating";
export const id="dl_57aa148b1fb395ed8674";
export const url=new URL("../icons/roller_skating.svg?v=2682eab99aa4cc1499ff927c80372fc1c2fe39131338c333f1de7fc97507af66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
