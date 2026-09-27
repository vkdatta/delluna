export const name="lucid_3-signal-high";
export const id="dl_b2777495b17246cb8e59";
export const url=new URL("../icons/lucid_3-signal-high.svg?v=e475aa94407c29095c247d6ed221b0fd16345216a53266362c832c6590fab98a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
