export const name="autostop-fill";
export const id="dl_6de31cfaada24d518508";
export const url=new URL("../icons/A/autostop-fill.svg?v=b4774ab4e621257127b22fde9d3932eb80ed319e3b98f55693ea2e355a505e58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
