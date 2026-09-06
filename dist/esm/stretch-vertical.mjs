export const name="stretch-vertical";
export const id="dl_f18cb42b773e433fb42d";
export const url=new URL("../icons/stretch-vertical.svg?v=d321131ab67b87797da9227745c935c5c1db1b730ca4b0e6abea604dc23ed23b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
