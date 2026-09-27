export const name="amp_stories";
export const id="dl_b80f42966b2521bca89f";
export const url=new URL("../icons/amp_stories.svg?v=927fa7e27d1a5f41a05517cd1f3e479a0adda55a0dc8e8c93a89db7d6b17ffc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
