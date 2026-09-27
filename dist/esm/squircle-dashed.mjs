export const name="squircle-dashed";
export const id="dl_81621577ed5e4500b11f";
export const url=new URL("../icons/squircle-dashed.svg?v=22dfa3cd24238018bfa20829d4840caea5b8d8a86bef68ce75ea87566d2e5b30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
