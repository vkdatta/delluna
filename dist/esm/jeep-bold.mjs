export const name="jeep-bold";
export const id="dl_212efe0abcb14fe6ab6d";
export const url=new URL("../icons/jeep-bold.svg?v=1d99de04fd602a760d8c9aee695e1d516acf90fee6c7946541d4d3b6dbb1192b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
