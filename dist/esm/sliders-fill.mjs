export const name="sliders-fill";
export const id="dl_3340f46e1ed8207946e5";
export const url=new URL("../icons/sliders-fill.svg?v=adfd83bbb46ab2a082c06b3f9c87ddce041199496fbaab8b54091ae85603a3ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
