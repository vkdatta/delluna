export const name="earbud_right-fill";
export const id="dl_c9e52e2b7284cbb3e209";
export const url=new URL("../icons/earbud_right-fill.svg?v=dc29e569eee40c3547a0f40ca9e37cf06e06f4a3f0cbd0f8c4afe921efea7507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
