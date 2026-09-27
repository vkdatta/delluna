export const name="maximize-fill";
export const id="dl_42fa90c5fccc4494a53a";
export const url=new URL("../icons/maximize-fill.svg?v=c05b7ee556a18343050fc3e5c0f98cca7ccfe872e1e878b1b3d00a823f7f9f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
