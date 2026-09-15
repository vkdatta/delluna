export const name="difference";
export const id="dl_c458fba4973041b180c7";
export const url=new URL("../icons/D/difference.svg?v=e2cb9905f054c4fc37db90c6e1c6d32cedf842c293d1f202ae8938a91c280927",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
