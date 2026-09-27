export const name="moving";
export const id="dl_6265ffdf45f3fdb3d4a6";
export const url=new URL("../icons/moving.svg?v=77f5076485ae128f91f65b813894eb416223251a768cf3d87de3c5a922807145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
