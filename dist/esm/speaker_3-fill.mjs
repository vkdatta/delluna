export const name="speaker_3-fill";
export const id="dl_c3c10504db5efb41302e";
export const url=new URL("../icons/speaker_3-fill.svg?v=08da3a1ce1f869eb33daba58dfc5f6400ae1b342c2945e2e92d4d7166d796393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
