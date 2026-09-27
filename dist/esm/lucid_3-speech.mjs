export const name="lucid_3-speech";
export const id="dl_51afc2728d3a482088c1";
export const url=new URL("../icons/lucid_3-speech.svg?v=81c87123a2b3e4842ecad36a88ccb024fc9d00321ae1de304c759622cefd7216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
