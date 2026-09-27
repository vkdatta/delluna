export const name="light_mode_auto";
export const id="dl_e5607a27a84e787d79bb";
export const url=new URL("../icons/light_mode_auto.svg?v=ffc4d5c1dc82a4bf640cbeebf553547e8846de9d4a42fb085bbdab1f0e5afd8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
