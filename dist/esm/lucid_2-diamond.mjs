export const name="lucid_2-diamond";
export const id="dl_cafbbf7576f845f6b073";
export const url=new URL("../icons/lucid_2-diamond.svg?v=9d6e9df57fd2cbccdfe579aab236be6551962722144913ac7789fc265c0969c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
