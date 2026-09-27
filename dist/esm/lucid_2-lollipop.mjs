export const name="lucid_2-lollipop";
export const id="dl_171591a433b24eaa9578";
export const url=new URL("../icons/lucid_2-lollipop.svg?v=a057b53f7fc6aa8790f0b9c1f04f0b19c7ee759974055b61062be4a00a5c9b25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
