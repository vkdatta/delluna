export const name="macro_off";
export const id="dl_78851f02495c45ac86bf";
export const url=new URL("../icons/M/macro_off.svg?v=df87d5a73abf6fb27e21f6a83d509fc1d390e826a86dc6152f405d50e6daa7c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
