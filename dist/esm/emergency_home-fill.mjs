export const name="emergency_home-fill";
export const id="dl_09f4bafb49734b2e94c6";
export const url=new URL("../icons/E/emergency_home-fill.svg?v=302d72de202f919b20d91ad403e1b3d361000ab30bcdc0ba59ecee9fe3cbc9be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
