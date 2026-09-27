export const name="thumbs_up_down-fill";
export const id="dl_4cdc19223227fc32b792";
export const url=new URL("../icons/thumbs_up_down-fill.svg?v=6450e3a26f60410c609ce1831d7341318662ddb4faef1e5450d71b583298354d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
