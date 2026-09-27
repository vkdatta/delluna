export const name="thermometer-simple-thin";
export const id="dl_c629a5a186dc94b81cb1";
export const url=new URL("../icons/thermometer-simple-thin.svg?v=6984cca44d2aa56adfd5c43a68ecb9fb09eb940a6ba4ee5684a6431bff8c914b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
