export const name="wechat-logo-thin";
export const id="dl_1aecfde1132d3c256231";
export const url=new URL("../icons/wechat-logo-thin.svg?v=7314056ef61f4302f98b58d377dc297e84958071aee9f0d934d11dae7ceb59c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
