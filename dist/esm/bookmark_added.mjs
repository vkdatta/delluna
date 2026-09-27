export const name="bookmark_added";
export const id="dl_4c27bf21fe3ffc4519ef";
export const url=new URL("../icons/bookmark_added.svg?v=c87b35c61de1c6020a4b875434a961e21c5b76e767f2e6d76fde49c8f7f4cc39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
