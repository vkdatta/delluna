export const name="google-logo";
export const id="dl_d35e518ea63b4ce8acca";
export const url=new URL("../icons/google-logo.svg?v=e36e4de8684d69cd16a8f9f19cc52363cb8315053f45bdad3acf9ac1ad99c72c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
