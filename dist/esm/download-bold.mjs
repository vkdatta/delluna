export const name="download-bold";
export const id="dl_0865be2bae4d4d049d56";
export const url=new URL("../icons/download-bold.svg?v=e37b82aff7e8754c0ae4e279d0a368eb4302f48de4c2c2c3772ff114753c8a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
