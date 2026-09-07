export const name="selection-slash-thin";
export const id="dl_20a972800c894d249d10";
export const url=new URL("../icons/S/selection-slash-thin.svg?v=a8df1cf387688b2e8a8ca121aa1be124e00245ceef2021c28d96571ea8fc899e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
