export const name="union";
export const id="dl_435fd6c90078813c8725";
export const url=new URL("../icons/union.svg?v=86b5e4c22f609cc0ca545e5b9e82514023d833574d1f8ae5417f98abc4330689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
