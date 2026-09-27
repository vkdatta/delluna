export const name="snowmobile-fill";
export const id="dl_e69f70d0c8ef19effe6e";
export const url=new URL("../icons/snowmobile-fill.svg?v=ef99e0e3c2faefe43429c09b8d5385132152a794f0743d78a63614a5077c4da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
