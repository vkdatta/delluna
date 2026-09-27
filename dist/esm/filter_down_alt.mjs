export const name="filter_down_alt";
export const id="dl_a50fd597f72327fe39c9";
export const url=new URL("../icons/filter_down_alt.svg?v=17afecd922d1ab140bb51da2cea0d4ec5bbeb39abe9b82fd3c3ebcd4e2034f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
