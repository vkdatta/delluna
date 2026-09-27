export const name="propane_tank-fill";
export const id="dl_deb87b1cc0fc6eb9e259";
export const url=new URL("../icons/propane_tank-fill.svg?v=b37753500f87f5bbf4228438830107c0592139cc38695bbaf24dd57e1f4b5b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
