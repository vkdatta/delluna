export const name="e_mobiledata-fill";
export const id="dl_c9d58d77d85d70ec9550";
export const url=new URL("../icons/e_mobiledata-fill.svg?v=7f07a406e2c2f6caf49f1fd6c91cb92c20928a918278c4c79b43244d5372ab7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
