export const name="vinyl-record-duotone";
export const id="dl_092ed70b58c745d48e47";
export const url=new URL("../icons/vinyl-record-duotone.svg?v=4f0518063428e14caba949b30f461032b08e67f63b22f68a0c8529bd4ab7990c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
