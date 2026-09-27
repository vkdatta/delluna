export const name="lucid_2-fishing-hook";
export const id="dl_c2236589e57f4facb013";
export const url=new URL("../icons/lucid_2-fishing-hook.svg?v=5413a094d6e574786debfb94730282ad27fbe23548decd244f37d663e4ed74d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
