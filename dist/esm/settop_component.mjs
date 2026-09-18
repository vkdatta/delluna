export const name="settop_component";
export const id="dl_658eca9650d94f8f90c2";
export const url=new URL("../icons/settop_component.svg?v=dbe4fa0e5566e2d2d3b5ffe0dc7a15a1db11924f50792f44a3daf9164d1a4430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
