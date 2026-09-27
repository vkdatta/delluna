export const name="coronavirus-fill";
export const id="dl_590209f30a2bf0151a3d";
export const url=new URL("../icons/coronavirus-fill.svg?v=51a81ebdb7114a6f80db6afa72d30274dcebef06e3141f01236432828edb9c6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
