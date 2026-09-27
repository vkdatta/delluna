export const name="plugs-connected-light";
export const id="dl_fa25891cbdf54956bef4";
export const url=new URL("../icons/plugs-connected-light.svg?v=600ef2cb408d419a6970c174915198a2e4ca38f2c7cde3f0e009b31a0b23737c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
