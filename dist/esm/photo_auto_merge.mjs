export const name="photo_auto_merge";
export const id="dl_51220e6cc15b96b16c37";
export const url=new URL("../icons/photo_auto_merge.svg?v=81aca92d004c203b8ce78ca2ce81d70ad9d56ee0b21e9b4ee9c76cfaf31d87bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
