export const name="settings_heart-fill";
export const id="dl_f74907b90a37895a1434";
export const url=new URL("../icons/settings_heart-fill.svg?v=fec7dae0d58316908e1dbe10d601341403903e49169b001bee238c485b2aeffc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
