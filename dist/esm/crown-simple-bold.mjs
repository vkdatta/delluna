export const name="crown-simple-bold";
export const id="dl_c9dbf1a3b912400bb0d7";
export const url=new URL("../icons/crown-simple-bold.svg?v=0bd9d8f114e8db6eb32e2fb05de2cd6c198124ea8e8c6a5530d5794bb5ac967e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
