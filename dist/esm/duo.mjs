export const name="duo";
export const id="dl_8b10a17b6b25b373fdf6";
export const url=new URL("../icons/duo.svg?v=b8dbec86261244b96654114e9172cb5bef640d61785156e9ec3d3db1a7ee2ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
