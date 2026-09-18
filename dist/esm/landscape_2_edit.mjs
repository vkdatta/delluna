export const name="landscape_2_edit";
export const id="dl_c87cbf6563e54693814d";
export const url=new URL("../icons/landscape_2_edit.svg?v=68c61275b2ff13e02098d06da8ae794b1b4720ef4e8ef1fb037b2c3bdce4129f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
