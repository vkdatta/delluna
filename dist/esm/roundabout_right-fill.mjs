export const name="roundabout_right-fill";
export const id="dl_639aa481c93f4f319489";
export const url=new URL("../icons/R/roundabout_right-fill.svg?v=b5f07039f76f0dc01cb059333db96892b8a7db351db5b7b21c9b4d533815ccae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
