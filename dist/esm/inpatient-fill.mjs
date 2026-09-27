export const name="inpatient-fill";
export const id="dl_b5751fcb7c2edb374ee0";
export const url=new URL("../icons/inpatient-fill.svg?v=b28c578564a653d43dd903e6c5cb9df339dd8a10630b9eae00a49ef5b2307666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
