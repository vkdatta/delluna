export const name="text-outdent-bold";
export const id="dl_cfcd0cffb95f7758a454";
export const url=new URL("../icons/text-outdent-bold.svg?v=e423891c38f9bbbce667674135a4bf65585294214a9f6d429e33ec1ecab6e021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
