export const name="lifebuoy-thin";
export const id="dl_7bb01f1a43414ad89ff9";
export const url=new URL("../icons/lifebuoy-thin.svg?v=9a811a14396796c935063b794cac16c4804dc11db6717c3954b43cc7f6f1041c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
