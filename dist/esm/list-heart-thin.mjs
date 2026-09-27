export const name="list-heart-thin";
export const id="dl_61006c49da924e9da583";
export const url=new URL("../icons/list-heart-thin.svg?v=4a0771fc00e1d8d6da1057cad8cec8b1983ad904fbd889cb366a18ce34179457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
