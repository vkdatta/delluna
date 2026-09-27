export const name="lucid_3-square-arrow-down-right";
export const id="dl_1881bd5b3b16462795cc";
export const url=new URL("../icons/lucid_3-square-arrow-down-right.svg?v=ef72f6db0c55b5c30721e7cdd4b5c5e1a923c316e2fd2a8d534e8cf0b75d793b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
