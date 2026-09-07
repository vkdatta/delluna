export const name="sticker-light";
export const id="dl_253e8875585f47bdac42";
export const url=new URL("../icons/S/sticker-light.svg?v=53d9f1d934d12d6f704f29b8db244a73da0f9c723a90e001578ae17bae6bd42c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
