export const name="square-radical";
export const id="dl_737d4a35d61c45faaff5";
export const url=new URL("../icons/square-radical.svg?v=8b691fe37762ecb116786ee81818f6eb98d4ae95ece21b9c363360343580490e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
