export const name="tag-simple-thin";
export const id="dl_e9133b815508b7a71cde";
export const url=new URL("../icons/tag-simple-thin.svg?v=26ffab14d66713ae9f1ae98ec1ffba071e9dab6a6bf4b54495e585a4e2d4607d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
