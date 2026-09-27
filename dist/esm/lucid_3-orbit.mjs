export const name="lucid_3-orbit";
export const id="dl_f72e650b9c5f42169858";
export const url=new URL("../icons/lucid_3-orbit.svg?v=b0f5ea002556317db4a3ff5257b897f29b5e7ad2dca7e739bd63ef5fb5e27c38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
