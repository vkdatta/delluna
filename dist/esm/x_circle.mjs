export const name="x_circle";
export const id="dl_054b7a0049064daea183";
export const url=new URL("../icons/x_circle.svg?v=f91b4ab13ee9e80519f5652626359779a567ff41865f1b545e91c8c754cc8318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
