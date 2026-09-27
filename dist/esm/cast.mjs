export const name="cast";
export const id="dl_1217aa8b9e9ebb81e014";
export const url=new URL("../icons/cast.svg?v=66b5d6a4067f5bd0843c811551cb65331f9b7770762b36113371cc16dbf49b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
