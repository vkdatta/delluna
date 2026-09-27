export const name="immunology-fill";
export const id="dl_64ec0cfc930b8d6cabe5";
export const url=new URL("../icons/immunology-fill.svg?v=e19f9860b840edb12cdde3fc19886b9dff618c633e0928eca44b0d289bc21f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
