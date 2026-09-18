export const name="dashboard";
export const id="dl_93cc4fd7991e40479313";
export const url=new URL("../icons/dashboard.svg?v=e2e16487ea7926118c78aa3a35fbdd59d75895b877d56020c5eae7d8f97312a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
