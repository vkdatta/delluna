export const name="lucid_2-image-minus";
export const id="dl_6b4d2389faec483cbaa2";
export const url=new URL("../icons/lucid_2-image-minus.svg?v=cc5c20851e5450b3cb69479e9db60a44991338d127d797b266d7ca9e4bfe9ef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
