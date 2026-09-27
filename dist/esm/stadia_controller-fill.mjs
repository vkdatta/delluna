export const name="stadia_controller-fill";
export const id="dl_2ecec1df6fd4f13faec1";
export const url=new URL("../icons/stadia_controller-fill.svg?v=2469caf63ce790ce82d7dadaa9e8680365dab13ad6a36cfa2b8297719f421540",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
