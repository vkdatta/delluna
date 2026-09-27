export const name="phone-call-bold";
export const id="dl_6339044eb2d042879b18";
export const url=new URL("../icons/phone-call-bold.svg?v=6aff14c92c7f52ae1ddde864549c931852f614f1e7e853b76d7655ed5d7300fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
