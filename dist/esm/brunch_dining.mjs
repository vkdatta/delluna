export const name="brunch_dining";
export const id="dl_df7953e2c4dd4f289bb4";
export const url=new URL("../icons/brunch_dining.svg?v=073b13072e1294e316c4e8e0d3eb89d8b9a41cc4298831548c6c95d1045c06e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
