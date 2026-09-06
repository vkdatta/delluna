export const name="microsoft-powerpoint-logo";
export const id="dl_ef7eced5c049463c94b9";
export const url=new URL("../icons/microsoft-powerpoint-logo.svg?v=e90928ee3dc1bebdfbef2536eff486251b6feea2f6f65847eab431ffa6f9f40b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
