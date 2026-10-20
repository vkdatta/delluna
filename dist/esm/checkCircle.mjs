export const name="checkCircle";
export const id="dl_fa7fa9a9ce424c74b336";
export const url=new URL("../icons/icons-svg/checkCircle.svg?v=f5ef64752cb513c74ba3e86ec1ed1a815a3093222fbccf3cb9893c8bc9788233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
