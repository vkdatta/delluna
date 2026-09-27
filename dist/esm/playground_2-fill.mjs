export const name="playground_2-fill";
export const id="dl_fdf9a2c6eed0082865c5";
export const url=new URL("../icons/playground_2-fill.svg?v=2928f9c005901e65bdbd62f412e799cebf896fca34bf63fff065e41b98902da5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
