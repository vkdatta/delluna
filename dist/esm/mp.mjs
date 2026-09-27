export const name="mp";
export const id="dl_98cc85fbf96962bb27ed";
export const url=new URL("../icons/mp.svg?v=6b5b00e1a55f7aa5f9b06be4fafcf2bddddd6f9798db04f67af76c2854154a21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
