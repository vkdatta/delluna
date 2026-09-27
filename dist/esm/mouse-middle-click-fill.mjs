export const name="mouse-middle-click-fill";
export const id="dl_82a58cd4d13d4e8198ae";
export const url=new URL("../icons/mouse-middle-click-fill.svg?v=6f804c7c6d4c380b72ac40486c046427216cf2fe394afa6864c5da2636905c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
