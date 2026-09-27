export const name="download_alt";
export const id="dl_226aca1b0b76f74fd129";
export const url=new URL("../icons/download_alt.svg?v=68d228f1eb5c9d104dae149ce309290b429d39120812334c08ac0c9a22d89330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
