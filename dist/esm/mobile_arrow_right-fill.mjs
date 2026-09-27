export const name="mobile_arrow_right-fill";
export const id="dl_86c299acc8d6e310004c";
export const url=new URL("../icons/mobile_arrow_right-fill.svg?v=943db8d26eaf8501a24a39e0ca039f8acce4d5a0232c11c365d9052291dbfcbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
