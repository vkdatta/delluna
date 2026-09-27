export const name="gender-male-light";
export const id="dl_1e0201451ba44386bde3";
export const url=new URL("../icons/gender-male-light.svg?v=d499a577269d9c8a4cd51b9ca032032792b1590ef5666da6c6637825df5bb8f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
