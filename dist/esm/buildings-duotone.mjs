export const name="buildings-duotone";
export const id="dl_1c5bba615ba3412b9f6a";
export const url=new URL("../icons/buildings-duotone.svg?v=0e4c3c7e37b34d8c17c463b3938476b771465df228a4cbd5aebba513dd537e57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
