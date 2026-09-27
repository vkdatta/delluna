export const name="school-fill";
export const id="dl_210714ef20a9b95b6b55";
export const url=new URL("../icons/school-fill.svg?v=10fbba4d1360d3cb86f0768706c3d6fb70abb6c89d5da3837a8632ff9ad70f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
