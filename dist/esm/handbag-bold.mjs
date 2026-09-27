export const name="handbag-bold";
export const id="dl_8b4327530196404bb264";
export const url=new URL("../icons/handbag-bold.svg?v=186084c60bd07caeb7b13b1566b369cedac7870756c5eed519f724371320c300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
