export const name="wifi-low-bold";
export const id="dl_81553f49902762cff4a9";
export const url=new URL("../icons/wifi-low-bold.svg?v=c66a710337a54e8e570a9a5253d2bf8eb86ececf75ff9bd64f67db8a3cdabe64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
