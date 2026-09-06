export const name="compass-rose";
export const id="dl_783b3049a1d44df49b34";
export const url=new URL("../icons/compass-rose.svg?v=e1ea9281666f9bd1ccb1580ddc7399b55398f1145791dd6162a4cceab0f3fafa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
