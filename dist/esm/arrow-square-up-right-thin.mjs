export const name="arrow-square-up-right-thin";
export const id="dl_bab11487e5134c3d933c";
export const url=new URL("../icons/arrow-square-up-right-thin.svg?v=ee68b0c8dd51ad59b2f5124cfb49765dae4e4a99fa03fe95ca8f04f9af473ed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
