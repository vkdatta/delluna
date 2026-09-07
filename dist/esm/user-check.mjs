export const name="user-check";
export const id="dl_4d346248a76b431bbad9";
export const url=new URL("../icons/U/user-check.svg?v=39b6cda4c963ef987a4998a9c9becb2e5edcacb327346b44b2b945f11e1f93e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
