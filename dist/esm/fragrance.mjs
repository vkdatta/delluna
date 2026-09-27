export const name="fragrance";
export const id="dl_255a2681e09f8b8c3c1e";
export const url=new URL("../icons/fragrance.svg?v=10085036da820f15a148a1f8fe311276547dd5194c6b1a55822af90de0b75c65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
