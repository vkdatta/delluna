export const name="hard-hat-duotone";
export const id="dl_700bd29af3a74c658ab3";
export const url=new URL("../icons/hard-hat-duotone.svg?v=551f30849f0deab87735e4802bbc72d260e37476d290f5d4d8dff0f844a2a8df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
