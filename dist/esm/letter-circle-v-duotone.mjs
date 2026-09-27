export const name="letter-circle-v-duotone";
export const id="dl_8f47a853395b4b3db45d";
export const url=new URL("../icons/letter-circle-v-duotone.svg?v=95a501dcee6ed04efb57ed01478ddcfc0f29a1acfe1282e038cf53e3d2ba497b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
