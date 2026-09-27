export const name="add_moderator";
export const id="dl_0f9b0bebaed68287f576";
export const url=new URL("../icons/add_moderator.svg?v=ac4f4dcd4261d303266750ff30afdfe85d4e996228c43ab4b4b3d45a164c8ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
