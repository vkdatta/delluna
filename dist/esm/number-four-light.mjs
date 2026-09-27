export const name="number-four-light";
export const id="dl_81c83a0421eb48f1bb9e";
export const url=new URL("../icons/number-four-light.svg?v=70d9d218693fa774826c59b90703a0c6b79800be7f4a28eaa11c4d6cb35b8fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
