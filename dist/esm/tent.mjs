export const name="tent";
export const id="dl_56db3641bf81480589ee";
export const url=new URL("../icons/tent.svg?v=f06a23d26971cbd47b682dc8543dec805fb20d817d88dafbe55392d416e0b2ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
