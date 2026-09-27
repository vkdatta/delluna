export const name="sensors_krx-fill";
export const id="dl_050386b850db5b8cbd10";
export const url=new URL("../icons/sensors_krx-fill.svg?v=f8d1f1f21bec10b12ced7fd2ffeebef4424b138a82eeed2866ae000959f71f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
