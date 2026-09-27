export const name="report";
export const id="dl_642031ef3d980b92db6c";
export const url=new URL("../icons/report.svg?v=8b1ba4a57f564074b30bb4c4b9c50d43e6d57f419caf5b73676c1af042241f57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
