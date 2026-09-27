export const name="fluorescent";
export const id="dl_7313e7daa73928c42120";
export const url=new URL("../icons/fluorescent.svg?v=8777da4b51bc26296724869ba60e1a498410fe13b03d813bbc0a64b35de122cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
