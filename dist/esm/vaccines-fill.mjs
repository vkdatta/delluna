export const name="vaccines-fill";
export const id="dl_83cb93d73cf44a70994f";
export const url=new URL("../icons/vaccines-fill.svg?v=3d3be9b9bc0f4224f04cdcb20586e1533d375754f531e409e356580646b94ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
