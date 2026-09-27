export const name="minus-circle";
export const id="dl_b5a5255dbd8c4fadaa08";
export const url=new URL("../icons/minus-circle.svg?v=836be21d755e001b09cab8e9e9bad4b183634c823d592695c986b4f5f2bb8edc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
