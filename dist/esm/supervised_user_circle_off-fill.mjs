export const name="supervised_user_circle_off-fill";
export const id="dl_72dd16d6b02a4803b9a3";
export const url=new URL("../icons/supervised_user_circle_off-fill.svg?v=43fbf3bef2de802adf3baa25d449df72a26b886f0c01e7bab720d7d5d817a1c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
