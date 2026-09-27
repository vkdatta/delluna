export const name="square-radical";
export const id="dl_737d4a35d61c45faaff5";
export const url=new URL("../icons/square-radical.svg?v=f302fe94f5b08feaeb7fd8e6ffb5587a34299a7faa253a55167cdafd9de21b6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
