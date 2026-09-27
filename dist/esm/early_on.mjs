export const name="early_on";
export const id="dl_2d2fd0bae4e7399465fc";
export const url=new URL("../icons/early_on.svg?v=96702a04ce9840a5d93eab71aa4a8cbabde77c7ebc5d7297dcfde0a2271dcc7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
