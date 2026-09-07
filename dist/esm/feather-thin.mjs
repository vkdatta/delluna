export const name="feather-thin";
export const id="dl_93400f00ff764e52b40f";
export const url=new URL("../icons/feather-thin.svg?v=617509671b51c6764cd864495472fbaedaa5fd5ff874e8e2d422be1210331ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
