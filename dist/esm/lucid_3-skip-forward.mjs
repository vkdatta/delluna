export const name="lucid_3-skip-forward";
export const id="dl_a0d5398b50804cddbd50";
export const url=new URL("../icons/lucid_3-skip-forward.svg?v=27f5715602342b1804ce1642c7c0614c4fc8ccf8fd581a7967550a966a43ff5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
