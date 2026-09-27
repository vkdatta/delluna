export const name="lucid_1-bookmark-minus";
export const id="dl_5be028686ed84f8b87c0";
export const url=new URL("../icons/lucid_1-bookmark-minus.svg?v=fa0336096cca577c8e5e77973120cec65989a8ea0f5d63f0a0e4512c43c7453c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
