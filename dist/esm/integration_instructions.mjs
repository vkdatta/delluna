export const name="integration_instructions";
export const id="dl_3bbb9119b5444f5e9605";
export const url=new URL("../icons/integration_instructions.svg?v=1a8e9e8c1df1f0dd834cb192c1ac8a64fadbdbe0073252e49bc3b84fd919b24d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
