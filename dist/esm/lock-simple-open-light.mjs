export const name="lock-simple-open-light";
export const id="dl_5e1574b7eac44ead8503";
export const url=new URL("../icons/lock-simple-open-light.svg?v=7315368e9744a5be714d0e03c4189835e3b06930965ad710d972e88fa2fc24c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
