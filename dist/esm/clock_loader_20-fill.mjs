export const name="clock_loader_20-fill";
export const id="dl_3e6685ccc935378f2e5a";
export const url=new URL("../icons/clock_loader_20-fill.svg?v=6b9ad980bd119bde830b7679a457571bf5973f680455413f441c61da3d21171f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
