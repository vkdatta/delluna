export const name="square-split-vertical";
export const id="dl_21f1677d3971489c98b3";
export const url=new URL("../icons/square-split-vertical.svg?v=418c89514aa74bb72eb4119620a16302be90d31df559fdbe2957e3bdebb920fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
