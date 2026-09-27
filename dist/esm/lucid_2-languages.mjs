export const name="lucid_2-languages";
export const id="dl_6a9d7bba87ec402bb75b";
export const url=new URL("../icons/lucid_2-languages.svg?v=94ed4947f0354021f6668e651d12ef12ceeef8a1d6e81e6750ef3feee5152c5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
