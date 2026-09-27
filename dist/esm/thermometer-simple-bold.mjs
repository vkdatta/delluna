export const name="thermometer-simple-bold";
export const id="dl_86ec4f74f926186251c2";
export const url=new URL("../icons/thermometer-simple-bold.svg?v=8a6da7536eb236296c9a45e2f66f31933c0c2beee67ba4ab582748ad70a204a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
