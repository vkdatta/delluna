export const name="trash-simple-thin";
export const id="dl_109027ed8debc6b4277a";
export const url=new URL("../icons/trash-simple-thin.svg?v=6fb169143cc2c4954391227adc00dade57003a43878c6cc42b2f9021ff935170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
