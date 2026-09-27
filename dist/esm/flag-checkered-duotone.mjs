export const name="flag-checkered-duotone";
export const id="dl_fb0f3070a6a4481c80f0";
export const url=new URL("../icons/flag-checkered-duotone.svg?v=b041a70f3615d43f4ccae6ecd6878cdc5596fa1adb67afbe9402a1aeeb3ca025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
