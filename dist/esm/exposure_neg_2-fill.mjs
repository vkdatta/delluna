export const name="exposure_neg_2-fill";
export const id="dl_1cf5b8ba0529851af071";
export const url=new URL("../icons/exposure_neg_2-fill.svg?v=00b1538fa820271c1357ab15948388ccbdc97af7f61489e8844944ae77046290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
