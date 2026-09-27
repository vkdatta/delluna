export const name="drop-half-bottom-thin";
export const id="dl_3aa6077e0a2f4850b9c6";
export const url=new URL("../icons/drop-half-bottom-thin.svg?v=4a240037a37d0418724a38b3370d4b51783f9daf925bdde63f8b8bbae85063f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
