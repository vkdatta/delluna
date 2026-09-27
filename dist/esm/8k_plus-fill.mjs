export const name="8k_plus-fill";
export const id="dl_9a7cca3393c173a5e39a";
export const url=new URL("../icons/8k_plus-fill.svg?v=631c8b154f85b491d063effbaa6b07bd72e6ec8aca329acdbb209a36e930d696",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
