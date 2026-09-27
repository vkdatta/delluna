export const name="film-script-thin";
export const id="dl_86c852ec3a524391a7ee";
export const url=new URL("../icons/film-script-thin.svg?v=d7d4a3e89a968920c1316c20a6faa8d9be1c32874c721f65d9024a82ce90e0a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
