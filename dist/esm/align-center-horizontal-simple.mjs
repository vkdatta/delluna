export const name="align-center-horizontal-simple";
export const id="dl_99e88bb58de24b2ab2ec";
export const url=new URL("../icons/align-center-horizontal-simple.svg?v=a742b823688658df89e6600e4fb9e2fdab6d97f3ec1ca5dd1790c24b6060c369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
