export const name="dark_mode-fill";
export const id="dl_10ec9406ecd6868600e0";
export const url=new URL("../icons/dark_mode-fill.svg?v=f805d92fba11c80b004b0dd602ee6464f1ae670093c0329114ccbf8227ffa4cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
