export const name="subway_walk";
export const id="dl_9fc6a4545b49cf758d47";
export const url=new URL("../icons/subway_walk.svg?v=f2599c5bf55e46b2fc471e45a1ee33528a2c7810cc256ef6a40c41aac1ceaf0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
