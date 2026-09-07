export const name="high-definition";
export const id="dl_df89a8926a6b4d8bacc0";
export const url=new URL("../icons/high-definition.svg?v=962766f54d7498f78765081da9df1f055fee3e58f395543fd12342717f422f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
