export const name="rewind-circle-light";
export const id="dl_06971c2e3f1a4f358849";
export const url=new URL("../icons/rewind-circle-light.svg?v=3849b490f9771a5d24d6200379eca3ecd47be133d79f5d77dd3a323bbd041bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
