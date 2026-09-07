export const name="smiley-x-eyes";
export const id="dl_a431437331834b83878e";
export const url=new URL("../icons/S/smiley-x-eyes.svg?v=a0dec24249cdb042746140d6f499e39837facea5284d0a2a3f2b9f10984f191e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
