export const name="elderly_woman-fill";
export const id="dl_b21af1f1dec806e0836f";
export const url=new URL("../icons/elderly_woman-fill.svg?v=4349e1d9e8181c2229b5f5054502046d55126ae0274b12a53d74cd8e7e0d1072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
