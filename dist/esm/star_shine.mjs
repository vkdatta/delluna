export const name="star_shine";
export const id="dl_834c9a3335cad4077e9d";
export const url=new URL("../icons/star_shine.svg?v=43b78653eb14ab649cb79993c8dbf9981f0c703d5c54f169fa94b5b744abd4e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
