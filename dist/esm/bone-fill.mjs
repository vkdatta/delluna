export const name="bone-fill";
export const id="dl_37b8d9f3a819493aa5b2";
export const url=new URL("../icons/bone-fill.svg?v=d3747f736de03f3f4f2651df03d1ffc329558afc3482829d06099a985c76efc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
