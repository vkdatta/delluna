export const name="genetics-fill";
export const id="dl_fe4ce207abc94c599642";
export const url=new URL("../icons/G/genetics-fill.svg?v=de1d95f435381185c1df1f0107f679096e89a307ff1ce01b6730e618a1d8f468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
