export const name="folder-open-thin";
export const id="dl_d261afbafe394543b305";
export const url=new URL("../icons/folder-open-thin.svg?v=b7c31a190b55b43ad94da5da9699d29e4da7a86f04480884d3040edd4f7896e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
