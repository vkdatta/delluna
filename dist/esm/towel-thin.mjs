export const name="towel-thin";
export const id="dl_03c76bc93e8b0ddcb084";
export const url=new URL("../icons/towel-thin.svg?v=25d0a1433fde0ada08290fa172fa4733bc4d217c1cac842f3e834590f5213e9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
