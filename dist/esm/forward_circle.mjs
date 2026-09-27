export const name="forward_circle";
export const id="dl_2908924f5f7e81eb32d1";
export const url=new URL("../icons/forward_circle.svg?v=e3efe39c2c1165edb7864b3758e3b90047fd8f04f1ae99f3ff017f291c7bc584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
