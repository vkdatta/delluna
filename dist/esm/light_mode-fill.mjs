export const name="light_mode-fill";
export const id="dl_53c9b84ebb3bac56e13b";
export const url=new URL("../icons/light_mode-fill.svg?v=66bca8335f205847825dc4f214b5b17cd8c6f86175dff547842d9a60cfe7b0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
