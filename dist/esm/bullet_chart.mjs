export const name="bullet_chart";
export const id="dl_dbff28a56cc6486a943d";
export const url=new URL("../icons/B/bullet_chart.svg?v=d197901b666f6143c268286c0780052a0fb7e7277a1541e5dcffe8ab99fac0de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
