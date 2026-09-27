export const name="19mp-fill";
export const id="dl_c1a6a030fa5fe37f6ba3";
export const url=new URL("../icons/19mp-fill.svg?v=f506c67e9e22056036e6b7a0e8a8027889c21fd20556bac9dfafdd27c3eda77b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
