export const name="four-k";
export const id="dl_12de0e908b4f46b49d30";
export const url=new URL("../icons/four-k.svg?v=1dfdc95d4c3a8c2babf2d9789f1622297d56384f23eed4469406b6ba942e1cc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
