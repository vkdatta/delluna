export const name="enterprise_off";
export const id="dl_03a160df26d93974fdac";
export const url=new URL("../icons/enterprise_off.svg?v=617a630da7784f55497bf9cea325c8d6ddcb489b54ef26ba7ac7cd432b76fd87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
