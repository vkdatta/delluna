export const name="browsers-fill";
export const id="dl_8b7a028fb7bf4289b701";
export const url=new URL("../icons/browsers-fill.svg?v=4411c93a517379fc4b7f169553ddafb546467c468db8b71d6a78e79204fe0049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
