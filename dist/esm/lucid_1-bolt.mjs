export const name="lucid_1-bolt";
export const id="dl_f15639b084e5436eb078";
export const url=new URL("../icons/lucid_1-bolt.svg?v=909e4e8160004ad8ce4aaedd978ff6728289864c6021e3ff325844ce279f5759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
