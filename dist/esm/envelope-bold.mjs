export const name="envelope-bold";
export const id="dl_e408f9b0b47b4f38a4bb";
export const url=new URL("../icons/envelope-bold.svg?v=975d0e6c4f62305d4852d10417f23bd2c2979bdcb9ba06563dfd5cb66f09851a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
