export const name="palette";
export const id="dl_dd02e1b251814487a78c";
export const url=new URL("../icons/palette.svg?v=5d547f087b4b95464b282f58ba401c57c654ddb69ad512b7a6005b69bca5d650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
