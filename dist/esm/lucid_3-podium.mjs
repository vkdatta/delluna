export const name="lucid_3-podium";
export const id="dl_c0f52e7c3bb84b1fa773";
export const url=new URL("../icons/lucid_3-podium.svg?v=ae5bab2fe98c1e1f94a36931c24252d69e537515f889df7bddf5212c45f30ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
