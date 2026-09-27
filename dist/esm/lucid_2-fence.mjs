export const name="lucid_2-fence";
export const id="dl_e001a227d3c44f6984ec";
export const url=new URL("../icons/lucid_2-fence.svg?v=77d86ac2cf90a2d68ca33d45431a91d8221f005fd46913dc789c3512efcc5596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
