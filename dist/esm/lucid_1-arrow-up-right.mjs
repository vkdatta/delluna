export const name="lucid_1-arrow-up-right";
export const id="dl_6989f0145a8c4fbc94a9";
export const url=new URL("../icons/lucid_1-arrow-up-right.svg?v=0f861f283a4d6da18cbe17e037e98f02dd945f8af1153adf62ca73cc87173830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
