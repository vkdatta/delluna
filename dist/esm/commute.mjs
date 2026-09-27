export const name="commute";
export const id="dl_8f8e62d428ad9c859e87";
export const url=new URL("../icons/commute.svg?v=f5418fe8e34753bffe59e8e5756a4c35b05f33e9bc505cb09a49c684b1d9fcf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
