export const name="match_case";
export const id="dl_0cd53558965e9094c116";
export const url=new URL("../icons/match_case.svg?v=8e39ef9adc1cc8150231d8b83e2cb64ed2f02e8bf6b8e56e730a67af6b6580c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
