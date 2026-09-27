export const name="lucid_1-bug-off";
export const id="dl_4ff188a8227e45f496a1";
export const url=new URL("../icons/lucid_1-bug-off.svg?v=ac962f08449f070d77c717b3d93c20f75a1c86b129363351c58a5d774c871990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
