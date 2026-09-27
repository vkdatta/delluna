export const name="arrow_selector_tool-fill";
export const id="dl_b19fe56576a51a2e5e66";
export const url=new URL("../icons/arrow_selector_tool-fill.svg?v=4b28f69703e7c5e8b21342e11996026b46ea12228ad9bd6f80b28ba514721877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
