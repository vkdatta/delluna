export const name="lucid_2-globe-x";
export const id="dl_72637c085cc64601b759";
export const url=new URL("../icons/lucid_2-globe-x.svg?v=d667782183b5336b2a490cb9e8100ae1ab5ae13cd4c090f2472dc30b35e9109c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
