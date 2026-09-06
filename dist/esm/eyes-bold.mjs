export const name="eyes-bold";
export const id="dl_b894651ee73649fe85dc";
export const url=new URL("../icons/eyes-bold.svg?v=103bc0ae111eadb59b7d132ed0df10478be5d91b797256d262e1d75a72468140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
