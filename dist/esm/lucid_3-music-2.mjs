export const name="lucid_3-music-2";
export const id="dl_a38e9ef8d772475b8014";
export const url=new URL("../icons/lucid_3-music-2.svg?v=9c0cf2cb41269bf3f2eb4c48246d6ad9749bfec4a2e78379aa1c2b5582cac933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
