export const name="smiley-nervous";
export const id="dl_bc37a5f08e773f0016cf";
export const url=new URL("../icons/smiley-nervous.svg?v=dcfd156e1a43ce05edaa60e292a98871e0ae0a7e619484ef815a4f826d679a84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
