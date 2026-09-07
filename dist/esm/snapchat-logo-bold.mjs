export const name="snapchat-logo-bold";
export const id="dl_f410ff1f48cd4af094fc";
export const url=new URL("../icons/S/snapchat-logo-bold.svg?v=8bcca4d75d4240418ebb6282e2ef9c5a4f29d1e27e09f2fc9e34de4bab5cc4c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
