export const name="dna-fill";
export const id="dl_d590f9fb70b3455da036";
export const url=new URL("../icons/dna-fill.svg?v=b4e54eaaacc1666b4a03e88d7230a4669f793e013de5b3a91998bdd6f1c86b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
