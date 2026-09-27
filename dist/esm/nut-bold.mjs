export const name="nut-bold";
export const id="dl_d7ea5618328a4a22a736";
export const url=new URL("../icons/nut-bold.svg?v=dd2360cfa78dd9a5b5b1224e9c95ac3b328f3bc0f4cc5e21dff85ca9062ca1f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
