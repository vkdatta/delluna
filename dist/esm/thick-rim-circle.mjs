export const name="thick-rim-circle";
export const id="dl_5659c414b9568d8676ac";
export const url=new URL("../icons/thick-rim-circle.svg?v=296c744eb5c969a1870d5dc437c4f5a972f15856f6eefbca906400ccdc28e5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
