export const name="podcasts-fill";
export const id="dl_6dc3de640d9a4436b263";
export const url=new URL("../icons/podcasts-fill.svg?v=0d66268cbf70c42ecfc0b6dfa2bca234586ce77fda879e498792f16d391ccc53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
