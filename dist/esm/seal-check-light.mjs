export const name="seal-check-light";
export const id="dl_94a90a10763110c642e3";
export const url=new URL("../icons/seal-check-light.svg?v=3b99d378ec53aae7e30f79d93e20c58716d9bb7a230e655cf3be0875478d2124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
