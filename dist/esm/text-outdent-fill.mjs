export const name="text-outdent-fill";
export const id="dl_5f1915299e65e576aa47";
export const url=new URL("../icons/text-outdent-fill.svg?v=49899282e864a83dab804f0552fadc2a620042ab8969e1d70c5287ff1d5d4f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
