export const name="lucid_2-flame-kindling";
export const id="dl_ea90aefef1ea4702bb6f";
export const url=new URL("../icons/lucid_2-flame-kindling.svg?v=cab656d3bc5f2467396c931d94a471887399d70bc60b08c4ebf6a738fc22ccd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
