export const name="linked_services";
export const id="dl_dd056f21d538956230d0";
export const url=new URL("../icons/linked_services.svg?v=fdab82947c122c891eefefc126f46f7eee7f1f907c6d2e447234d04adad25d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
