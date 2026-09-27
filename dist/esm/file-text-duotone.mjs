export const name="file-text-duotone";
export const id="dl_f0fb5e5fb0ea4e1abc91";
export const url=new URL("../icons/file-text-duotone.svg?v=de44905d9718bd174a7db36525e4b90493d755f735da793b7ce299f529321044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
