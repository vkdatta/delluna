export const name="wheelchair-light";
export const id="dl_758f055e006a7ce96878";
export const url=new URL("../icons/wheelchair-light.svg?v=c48beb2074e001581e8f7f3a0d64aad9c38e7009e77774837b5bbd47d1e49dcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
