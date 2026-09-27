export const name="lucid_1-circle-percent";
export const id="dl_21e444aaf07a4b5cbec2";
export const url=new URL("../icons/lucid_1-circle-percent.svg?v=4c5f7580078285325b5deea4e5146d04ff4bbc6eb561dc6293056d166d8f2c86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
