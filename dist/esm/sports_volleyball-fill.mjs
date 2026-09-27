export const name="sports_volleyball-fill";
export const id="dl_34fc6f265ff0866be716";
export const url=new URL("../icons/sports_volleyball-fill.svg?v=5efeacd1ef84f6366ec9a37b4fd532feb5bcfda0e64fe7137dade6aa41dbc092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
