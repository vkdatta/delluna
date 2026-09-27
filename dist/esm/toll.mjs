export const name="toll";
export const id="dl_2567ca9dab4219af0731";
export const url=new URL("../icons/toll.svg?v=a620e5f31b967ca767f16ff0b783b629f8401d43a902187ea1038b79a2447824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
