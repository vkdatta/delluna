export const name="eye-fill";
export const id="dl_10ca408065a04ff3bd23";
export const url=new URL("../icons/eye-fill.svg?v=4717ad31b0c76579faeaafba39a8c781a2d0245cb1ad5ed925844cc5546d8a97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
