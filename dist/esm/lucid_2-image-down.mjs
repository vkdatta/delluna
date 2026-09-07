export const name="lucid_2-image-down";
export const id="dl_d89c27f8a7dd47638acb";
export const url=new URL("../icons/lucid_2-image-down.svg?v=1415964562c5b63d11ba6569f66ea0b31b0c79f787a14baadc372a480ff6bf01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
