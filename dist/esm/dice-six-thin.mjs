export const name="dice-six-thin";
export const id="dl_bc97ef9adaf84ed584a0";
export const url=new URL("../icons/dice-six-thin.svg?v=5b78e149558871f3d51b16cab606e5db4fdff6b0847b47f663b9012c044ed148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
