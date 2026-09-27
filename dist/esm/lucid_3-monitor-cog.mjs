export const name="lucid_3-monitor-cog";
export const id="dl_b1bd943b15d04bc1b212";
export const url=new URL("../icons/lucid_3-monitor-cog.svg?v=5de9710f0bb4f9baca5afa6f82679e792e65394abfdb95f7773bb0e22d32e4b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
