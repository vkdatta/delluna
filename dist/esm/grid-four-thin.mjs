export const name="grid-four-thin";
export const id="dl_bfb19396f4fc44fc805c";
export const url=new URL("../icons/grid-four-thin.svg?v=ef98525532aeeedfb4f8dbed15dfdeee30db43f65c23a82be1e7c63ddcf3ddd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
