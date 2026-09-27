export const name="arrow_selector_tool-fill";
export const id="dl_f535fc0dfa81cc84b4d4";
export const url=new URL("../icons/arrow_selector_tool-fill.svg?v=a90eb81a9ae3ebc24fc08a17254d811d8643ccbc0bb81db8a5450b4305b6a15b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
