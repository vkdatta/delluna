export const name="jar-duotone";
export const id="dl_2c9560aa7b9047e1b8f6";
export const url=new URL("../icons/jar-duotone.svg?v=ca4266f0bd003004b051706cc2907f2bd77bcbd8cd18aa92e91bacdc41e74c95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
