export const name="lucid_2-georgian-lari";
export const id="dl_2634d65e5d63416a96eb";
export const url=new URL("../icons/lucid_2-georgian-lari.svg?v=c680184d310664a4f53ccd336bfb5247023c13d41174770a2a880291c503fe19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
