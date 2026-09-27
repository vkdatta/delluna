export const name="envelope-bold";
export const id="dl_e408f9b0b47b4f38a4bb";
export const url=new URL("../icons/envelope-bold.svg?v=65ad8f57624feeb9a92a2586346f605f569a085b7ac8ed8f5d9f63ee7bd04290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
