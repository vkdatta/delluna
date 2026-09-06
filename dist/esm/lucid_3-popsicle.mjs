export const name="lucid_3-popsicle";
export const id="dl_9c29209e891a45c5a2f4";
export const url=new URL("../icons/lucid_3-popsicle.svg?v=781186f63b8d0ff41daed6383920d020c98594f428d915b28f6ed62232202763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
