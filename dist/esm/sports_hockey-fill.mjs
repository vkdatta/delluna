export const name="sports_hockey-fill";
export const id="dl_a99ddfe3fb942b6df510";
export const url=new URL("../icons/sports_hockey-fill.svg?v=ef17bdf47d57c133accf1e7c5fa30c68e2d0bd09332294a5a7b91780f86a50b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
