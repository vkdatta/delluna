export const name="wifi-x-thin";
export const id="dl_6b39de535f9727164331";
export const url=new URL("../icons/wifi-x-thin.svg?v=321d691a5b4a2fa549d93aa3ecec4a0d4da81af791c8b02595c38b7fe7c7c929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
