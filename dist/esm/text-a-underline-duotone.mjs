export const name="text-a-underline-duotone";
export const id="dl_3d063d39eb23999a0d3e";
export const url=new URL("../icons/text-a-underline-duotone.svg?v=70866de63a512be214a1acf9073ac2a5cef5ecf8ba88d22579ee26d34126b900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
