export const name="nuclear-plant-bold";
export const id="dl_e3b79fdac8764bcba7e5";
export const url=new URL("../icons/nuclear-plant-bold.svg?v=521eb2fa0f20075df21cb11fa66626e4494401ce71c8d5d93cbf8af31cee9fc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
