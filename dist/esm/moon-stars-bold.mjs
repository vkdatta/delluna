export const name="moon-stars-bold";
export const id="dl_ca8def4f732142ee8267";
export const url=new URL("../icons/moon-stars-bold.svg?v=bdc8a7dcce0e11eb895173ef25f843593afcbdaeb93e5f2a2fe987b4c7c6d3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
