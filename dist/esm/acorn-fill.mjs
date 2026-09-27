export const name="acorn-fill";
export const id="dl_4ea7de7bf54b4a0d81bd";
export const url=new URL("../icons/acorn-fill.svg?v=b2aad023c36f48f53fc753b358e26283ee17c830ecc5c18b6e24c6d63d35c7c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
