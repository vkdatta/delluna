export const name="smart_display";
export const id="dl_56db71f2a565d738a069";
export const url=new URL("../icons/smart_display.svg?v=c1590bfa80d47e52064c24f6dc1c756e4d957924717f39b93981491b4650e3f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
