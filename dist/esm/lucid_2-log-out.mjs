export const name="lucid_2-log-out";
export const id="dl_b6e5c32bf52d4834b96f";
export const url=new URL("../icons/lucid_2-log-out.svg?v=d5e9dd30c175181ee41d84bb07de407cf86eee89fb7965c7b0bda80dcf9d0fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
