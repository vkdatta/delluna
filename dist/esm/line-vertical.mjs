export const name="line-vertical";
export const id="dl_b5d566a7d88e49adb10c";
export const url=new URL("../icons/line-vertical.svg?v=96a2b9f7c2c90e041f3ce29ac5754c9c3dc5399b1f2909cb3617eea43be626a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
