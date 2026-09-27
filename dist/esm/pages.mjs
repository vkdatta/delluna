export const name="pages";
export const id="dl_b056a69ca1e06363d0a5";
export const url=new URL("../icons/pages.svg?v=d9780bab1ad96f58b1e038d2b896766f6840e75cb2fd3404e47bd8da04eae33f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
