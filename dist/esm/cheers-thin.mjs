export const name="cheers-thin";
export const id="dl_0c070cb38e384f5dbe2d";
export const url=new URL("../icons/cheers-thin.svg?v=f64d92c4f8f08f3c1fb4587238e5cb998f3af3e2ba63d9d83e3014a83127605c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
