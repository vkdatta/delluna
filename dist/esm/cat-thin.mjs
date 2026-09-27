export const name="cat-thin";
export const id="dl_c20123f428ee4377972c";
export const url=new URL("../icons/cat-thin.svg?v=053c75081c945746f68f5768c4263380dbefc62f5d602953ba24aa0f905a2338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
