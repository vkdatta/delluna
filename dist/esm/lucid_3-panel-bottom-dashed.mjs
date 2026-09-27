export const name="lucid_3-panel-bottom-dashed";
export const id="dl_ad8aa4a79ee24818aee7";
export const url=new URL("../icons/lucid_3-panel-bottom-dashed.svg?v=cd5742542a31fb4ec456a9f8972bf9dbbc1e9b0c22f8c34d94447f8d24dacfa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
