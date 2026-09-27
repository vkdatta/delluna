export const name="egg-light";
export const id="dl_af07d635c21f4fd09f00";
export const url=new URL("../icons/egg-light.svg?v=1ea140f060c4b6a7f00f4cbec12a020f1e504c15efe36007684495b69dbe380f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
