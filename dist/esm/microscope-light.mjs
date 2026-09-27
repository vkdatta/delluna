export const name="microscope-light";
export const id="dl_3905478294e64209bd55";
export const url=new URL("../icons/microscope-light.svg?v=db90d4912ac31429dfecf0c8e89e053457fefc1a985d4df337b20e0d75e0cc34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
