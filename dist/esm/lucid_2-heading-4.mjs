export const name="lucid_2-heading-4";
export const id="dl_a2a51c0ba44046bb9cca";
export const url=new URL("../icons/lucid_2-heading-4.svg?v=e4a1bdf09bc2c295dff6c35cf5d96b28193b9ddcc908646aee0720307f8da8eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
