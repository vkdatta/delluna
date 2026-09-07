export const name="jar-label";
export const id="dl_06f2da1196bf4edbb93d";
export const url=new URL("../icons/jar-label.svg?v=ec0660b6ed47c96bb12bcef7559dc9bc047aaafc0a84551c1d013d9f4984e2fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
