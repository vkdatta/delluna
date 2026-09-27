export const name="split_scene_right";
export const id="dl_bfcc0c10f90c19dbcbb1";
export const url=new URL("../icons/split_scene_right.svg?v=756df172b9a50dd315b426da8f53bf18de4c8544422f174005a81001ecb64d72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
