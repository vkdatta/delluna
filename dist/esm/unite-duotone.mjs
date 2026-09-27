export const name="unite-duotone";
export const id="dl_ffc486405a642ed1e383";
export const url=new URL("../icons/unite-duotone.svg?v=e95e8326973ce5ea121cb53e52b359acb601d334e6f8ec8771f8afbaeea400f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
