export const name="smiley-sad";
export const id="dl_0fe837cbc04eb60112a2";
export const url=new URL("../icons/smiley-sad.svg?v=3f8dfc4542fb2b1452885504203be9e95d4e6bedcfce03d67af67f575502bc35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
