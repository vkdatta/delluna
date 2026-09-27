export const name="13mp";
export const id="dl_c88070b38330d22688dc";
export const url=new URL("../icons/13mp.svg?v=d9d476accf2ee19b40ce19b1b687afe9e281587797527c1b9899588e7e266168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
