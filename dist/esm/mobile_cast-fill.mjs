export const name="mobile_cast-fill";
export const id="dl_94d0c67659d48d87ef0d";
export const url=new URL("../icons/mobile_cast-fill.svg?v=cd7fa27fda579f1ed7358f89dd38070b4b8b05e5df6e34eca392272781602b3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
