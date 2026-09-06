export const name="link-simple-horizontal-bold";
export const id="dl_f663ae68f7504b9c97b3";
export const url=new URL("../icons/link-simple-horizontal-bold.svg?v=d43ac40979dfdd54c0ea29aefcfa997bda1f298d34e3f279e5f6e6120ecd051a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
