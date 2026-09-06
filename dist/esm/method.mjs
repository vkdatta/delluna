export const name="method";
export const id="dl_d323435fddc44231a43b";
export const url=new URL("../icons/method.svg?v=7a469928d012da4fa951df96362f6039213c41237751c4c7a9419240b7356638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
