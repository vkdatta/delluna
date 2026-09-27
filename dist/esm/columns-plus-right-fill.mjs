export const name="columns-plus-right-fill";
export const id="dl_ec659d6152d24c248aee";
export const url=new URL("../icons/columns-plus-right-fill.svg?v=24c241c4217b82875cb5b38b5473e6e79432cfe0fbab9f40d6df3e740c36349f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
