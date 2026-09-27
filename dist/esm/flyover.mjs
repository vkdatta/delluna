export const name="flyover";
export const id="dl_6e414350ba4a98a00b87";
export const url=new URL("../icons/flyover.svg?v=b0700c824b88d401fb83692bbd9c3ed40e9ac7e898843b734bc4b68057006a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
