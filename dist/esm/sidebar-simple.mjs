export const name="sidebar-simple";
export const id="dl_9cda8331e533438fa52f";
export const url=new URL("../icons/S/sidebar-simple.svg?v=36818e1212cb24f5e1aa7e10480b0f4dc399d2c61d9b9b53c062d799dde162a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
