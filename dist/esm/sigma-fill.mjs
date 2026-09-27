export const name="sigma-fill";
export const id="dl_30e4ba9ecad18483e18f";
export const url=new URL("../icons/sigma-fill.svg?v=a63177c7e023a4e08481518bac774a873c19a1afdf2a1c84b9433739bf4ae89f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
