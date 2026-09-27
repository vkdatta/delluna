export const name="find_in_page";
export const id="dl_be9cec51943abf15ebe7";
export const url=new URL("../icons/find_in_page.svg?v=84505c2ac08fe4171cfaac3503a54afe75bedee25702744f2ea53d998c173b80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
