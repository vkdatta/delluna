export const name="lucid_2-file-type-corner";
export const id="dl_a8df6f0219fe4f6f85c6";
export const url=new URL("../icons/lucid_2-file-type-corner.svg?v=d0697b9d93c91bcafbe92ed4c36e3b06bbdfe3f6c4c5da41af4a413db972bbf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
