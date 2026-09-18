export const name="graphic_eq_off";
export const id="dl_40f21c5f02784c7c963a";
export const url=new URL("../icons/graphic_eq_off.svg?v=a77ea4ade6fcc4eda21cd2024519bf8c38debbfdf7e0a77b48fd8f502967892d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
