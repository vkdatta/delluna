export const name="beer-stein-light";
export const id="dl_3911307735c74e1aad10";
export const url=new URL("../icons/beer-stein-light.svg?v=d3b1ad77ef5ba87c7269ce8e29d0f78bb981e71a0c7dff0547f3a7d2eb01b848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
