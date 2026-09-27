export const name="view_list-fill";
export const id="dl_8266ef89748cf9cfde6b";
export const url=new URL("../icons/view_list-fill.svg?v=fe28760d061abe7e4eda2a51a0f48f34a11fc9ea0fa5b7db34bacafb463b0d5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
