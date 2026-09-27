export const name="lucid_1-clock-arrow-left";
export const id="dl_5b33ccf38ced4bb7becd";
export const url=new URL("../icons/lucid_1-clock-arrow-left.svg?v=f76974641d9774966b61ad840ad7013691cb8a8e12f9121c4f270910e003c0f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
