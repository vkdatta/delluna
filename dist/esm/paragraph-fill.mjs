export const name="paragraph-fill";
export const id="dl_074c682d0a0041e79f5b";
export const url=new URL("../icons/paragraph-fill.svg?v=a2801b450b79b803087af02b1c34c2b4c08cbb370908c6337a4e737a34060f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
