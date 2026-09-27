export const name="hard-hat-light";
export const id="dl_f4d17bc7035e4a1f80a8";
export const url=new URL("../icons/hard-hat-light.svg?v=229e076a5386c36dd9f6772b2e63e8f7bfd6866fa40498c267e006649e4d0a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
