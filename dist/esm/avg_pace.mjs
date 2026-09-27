export const name="avg_pace";
export const id="dl_f4c70a7f3b06f4c20233";
export const url=new URL("../icons/avg_pace.svg?v=7770a8f4fe9c3c456c322ee7d758c2a675f3783869971e1c400f9b4502879560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
