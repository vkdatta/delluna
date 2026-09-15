export const name="free_cancellation";
export const id="dl_9725932a00904c929d2c";
export const url=new URL("../icons/F/free_cancellation.svg?v=45f088a578be6bb203b565369d2e6ac241a67603792f4eda8b8dd606e777abb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
