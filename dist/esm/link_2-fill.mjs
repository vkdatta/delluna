export const name="link_2-fill";
export const id="dl_6b5cd60c41785897553f";
export const url=new URL("../icons/link_2-fill.svg?v=41bfbc178b3f3c1aab1bcd629c6dd5f4c43b1f2e76cfe6e651b616d0e3374ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
