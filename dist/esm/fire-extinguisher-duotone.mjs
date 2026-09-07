export const name="fire-extinguisher-duotone";
export const id="dl_4773996ea6dd49fe923c";
export const url=new URL("../icons/fire-extinguisher-duotone.svg?v=677c8c44c213265f5a4ca2c14e752766e1bc90d8344a213d912fb8035d2b94e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
