export const name="camera-slash-bold";
export const id="dl_0aeb1eead2fd41ba92ed";
export const url=new URL("../icons/camera-slash-bold.svg?v=d08f10ee87fc5b28099caaa2de7d44dfc7c83812d2ed54b95df1c14c4ce66fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
