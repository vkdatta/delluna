export const name="arrow_upward_alt";
export const id="dl_09d234a9d6e0d34a7047";
export const url=new URL("../icons/arrow_upward_alt.svg?v=b0fabf3f898aa1c7272d1161490e641f76ddb89055cc808395e1170cb871aefd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
