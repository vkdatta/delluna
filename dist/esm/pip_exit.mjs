export const name="pip_exit";
export const id="dl_090d9389b7ce38849bbd";
export const url=new URL("../icons/pip_exit.svg?v=ea2cbb2eabe48459813b6f64c7c0bba7ea862c93ac5eb4d0242ba3b842309513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
