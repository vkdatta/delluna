export const name="caret-circle-double-right-bold";
export const id="dl_4422c6b52a644b95b143";
export const url=new URL("../icons/caret-circle-double-right-bold.svg?v=dab723c0287befa9fb233082601d70146bf65d53d493e993dc1715b65cd609aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
