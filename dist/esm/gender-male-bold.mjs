export const name="gender-male-bold";
export const id="dl_8a68811fe1a34d66acf5";
export const url=new URL("../icons/gender-male-bold.svg?v=5bc626298f7437c00c35105ae617279199239a2a8f60b6efd770559902ef1491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
