export const name="things_to_do-fill";
export const id="dl_557f385526013f66c954";
export const url=new URL("../icons/things_to_do-fill.svg?v=7481fdbd5df5c95d1602a9aab7e9578a1da970cd24fa7aca92435127aed8f3e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
