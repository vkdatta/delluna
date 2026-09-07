export const name="thermometer-hot-thin";
export const id="dl_14659fc7b84846cc98e7";
export const url=new URL("../icons/T/thermometer-hot-thin.svg?v=12c73b3287d113b46d86fdf6b682276e90c8db531a8fb421785c27224281c98e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
