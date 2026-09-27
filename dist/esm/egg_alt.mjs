export const name="egg_alt";
export const id="dl_edc8cb6242fab8a34ea6";
export const url=new URL("../icons/egg_alt.svg?v=dd077732ce682a8a7690190946b759ed6f22e76f76c94ace5c0ac2e948aa41c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
