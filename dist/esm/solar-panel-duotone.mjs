export const name="solar-panel-duotone";
export const id="dl_4d5dac84d6c0fceb540c";
export const url=new URL("../icons/solar-panel-duotone.svg?v=342afedf0014b3206d6553d695ea76854b49f5d71631c8b1abe444a4d0c10d89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
