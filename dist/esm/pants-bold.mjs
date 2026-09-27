export const name="pants-bold";
export const id="dl_da4cf698c9e348c3b84d";
export const url=new URL("../icons/pants-bold.svg?v=17f32936c5727f0a6b534103900182b71fb4ef62b91a061d193a3ae782a4c6d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
