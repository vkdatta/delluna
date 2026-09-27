export const name="tag-chevron-thin";
export const id="dl_b6053ff8bd8b954b9ee8";
export const url=new URL("../icons/tag-chevron-thin.svg?v=947b79c2b7efdcc40702effff2e6e72f15ee054dc071c941149ffe5704882684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
