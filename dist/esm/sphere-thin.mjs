export const name="sphere-thin";
export const id="dl_0a248d900c40d4f8c3d9";
export const url=new URL("../icons/sphere-thin.svg?v=865398e61a968c0dc2552cb75c345c18d06ccc715b3cb32bf93e5b5dc42a6842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
