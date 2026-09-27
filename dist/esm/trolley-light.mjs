export const name="trolley-light";
export const id="dl_9f7e26f738e2f996e56d";
export const url=new URL("../icons/trolley-light.svg?v=2f8147c2555a80f98bc05e34250714d5ac376857780e9803733159183cc9c86e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
