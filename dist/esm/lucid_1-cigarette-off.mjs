export const name="lucid_1-cigarette-off";
export const id="dl_af4f91d931c54c279ec8";
export const url=new URL("../icons/lucid_1-cigarette-off.svg?v=bc5ba24162dbb5c1c668e6e34acabcc700efbbc8741a592c1a66b95294a737e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
