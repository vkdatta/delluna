export const name="arrows-out-simple-thin";
export const id="dl_4a6e4392bb7b4bbb8af1";
export const url=new URL("../icons/arrows-out-simple-thin.svg?v=f617cf9030d819218fe6b6bab2b2a4bc41eff26d2c60da121ec8cf1fbc980fa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
