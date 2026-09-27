export const name="download-fill";
export const id="dl_54e1f2c0d35f4e9091fc";
export const url=new URL("../icons/download-fill.svg?v=cbdeafd70789a2d5a3acf575b158e08a5390a766b7a04bfc61b5bae7a95babaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
