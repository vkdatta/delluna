export const name="smiley-nervous-light";
export const id="dl_b341786eaa95408a83f1";
export const url=new URL("../icons/S/smiley-nervous-light.svg?v=733644c13ea491de07fc18f43d42d42275178fb5a656d58f5df6619788a31dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
