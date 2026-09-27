export const name="capture";
export const id="dl_c2897515df1f53a04a98";
export const url=new URL("../icons/capture.svg?v=eb0ea8c51537412a00cce525e988efa2c174123f9e829789fc5bec8423fd2c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
