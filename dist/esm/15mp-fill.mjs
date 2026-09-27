export const name="15mp-fill";
export const id="dl_7fb0648d0cbe05b16c4b";
export const url=new URL("../icons/15mp-fill.svg?v=29aa67bb0f059fda58d3eac12eab350bcaf3dce819dd90c2412afc9f40348354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
