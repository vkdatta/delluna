export const name="lucid_1-braces";
export const id="dl_0213e01cad0e43eaa333";
export const url=new URL("../icons/lucid_1-braces.svg?v=b56e4e58f33e6b45e5db6b783d572873bb61bffbb4d2b0ae2e478120f0fd0054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
