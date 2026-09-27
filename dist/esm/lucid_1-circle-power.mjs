export const name="lucid_1-circle-power";
export const id="dl_f96c54d0105047ce84e7";
export const url=new URL("../icons/lucid_1-circle-power.svg?v=1b8acf84bbf6a63ea5faceee3654dc44c89c9c89f91fd0c2747b40c298819c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
