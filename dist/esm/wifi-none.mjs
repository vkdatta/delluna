export const name="wifi-none";
export const id="dl_2e626a6cc927ae65d5da";
export const url=new URL("../icons/wifi-none.svg?v=7843981f13184c0bf90e2fe4cb66649167b85a8bd0602721a214faf62dd2eb3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
