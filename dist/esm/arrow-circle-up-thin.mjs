export const name="arrow-circle-up-thin";
export const id="dl_5c162d3ab97c4f62a821";
export const url=new URL("../icons/arrow-circle-up-thin.svg?v=6e510e91b58b2d2176439feb87995e019dc9c445d40105de02e8e26c4619ca4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
