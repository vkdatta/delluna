export const name="lucid_1-construction";
export const id="dl_162a671615e14ab486fd";
export const url=new URL("../icons/lucid_1-construction.svg?v=2de7579d9d302a0d4a54457406524ed18f9cd3c17362a297c8180ab3e954ff3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
