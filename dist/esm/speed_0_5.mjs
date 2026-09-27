export const name="speed_0_5";
export const id="dl_6eaa5505fb1d4b198927";
export const url=new URL("../icons/speed_0_5.svg?v=a44b12daa34ac3ad08bb373bef90a15401d93d3a9c3e549c17bfe0a8e6522bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
