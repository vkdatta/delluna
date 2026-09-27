export const name="lucid_3-speaker";
export const id="dl_b5bba228384846679c0f";
export const url=new URL("../icons/lucid_3-speaker.svg?v=55e3ac95b139cea8275832d9bab5073aab767958480401478a5924833a6b1017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
