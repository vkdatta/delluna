export const name="specific_gravity";
export const id="dl_30862b15f59de833285d";
export const url=new URL("../icons/specific_gravity.svg?v=b40a89c631aee134ceaf93af6a0af98f7d86402ec43e4a5c2bb6e4e0e86945dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
