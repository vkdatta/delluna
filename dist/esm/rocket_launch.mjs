export const name="rocket_launch";
export const id="dl_19d628defb3a18ee9f13";
export const url=new URL("../icons/rocket_launch.svg?v=c8c06151efaec4ee60439d7049183ed42cb379be546f4bb4aa16ba7e37888583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
