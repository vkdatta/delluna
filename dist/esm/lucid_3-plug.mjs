export const name="lucid_3-plug";
export const id="dl_f9aa33520b4c45cdaf16";
export const url=new URL("../icons/lucid_3-plug.svg?v=8df1abc23dfc007258a800ee05b9e3f96364c482ea8b60c275266d134093e4a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
