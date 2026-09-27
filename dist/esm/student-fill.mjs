export const name="student-fill";
export const id="dl_65d70fe17e7e2118c4b5";
export const url=new URL("../icons/student-fill.svg?v=ccede155ac43ab99b7c5c8efecda7298c901ad4b8c89dbbdd3dc2e413573960c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
