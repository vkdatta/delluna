export const name="bookmark-duotone";
export const id="dl_f919adc4cabd4a50a739";
export const url=new URL("../icons/bookmark-duotone.svg?v=e325510134019bf63db61ed27f30e3a33f239a541464c4d964b4d2aebac167f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
