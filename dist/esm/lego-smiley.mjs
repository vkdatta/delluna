export const name="lego-smiley";
export const id="dl_fdf9dc22fb39495480a7";
export const url=new URL("../icons/lego-smiley.svg?v=1473ecfb017fd6658de89fe6ba0f07512e5df73d63fe1cd18c872b671635db79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
