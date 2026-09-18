export const name="brightness_5";
export const id="dl_0493e02c893b4a0a8b03";
export const url=new URL("../icons/brightness_5.svg?v=dd87076156d60e8e63a28033c3bcf2e2de3d762b528739369e9fef10675582e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
