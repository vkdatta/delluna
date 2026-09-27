export const name="fire-simple-bold";
export const id="dl_af179ead28f04c3995f7";
export const url=new URL("../icons/fire-simple-bold.svg?v=f7970ffbf8d451a519c530d877b21c8a734a08794b1ce7ffc0290d92f657e264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
