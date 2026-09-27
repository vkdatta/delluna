export const name="lucid_3-share-2";
export const id="dl_dd3e4e94c5a0404cb415";
export const url=new URL("../icons/lucid_3-share-2.svg?v=fc1f1d4cbedce2ff81669bca885387521ca9a8e9cebeeb4477091a3f76a857be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
