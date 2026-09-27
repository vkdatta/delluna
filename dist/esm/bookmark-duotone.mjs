export const name="bookmark-duotone";
export const id="dl_f919adc4cabd4a50a739";
export const url=new URL("../icons/bookmark-duotone.svg?v=5f0dbc0264154e43442f1e6a42a7ef4f2166c18c1974e6264d6fe38f218fb89b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
