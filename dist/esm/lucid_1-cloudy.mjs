export const name="lucid_1-cloudy";
export const id="dl_39dec73da1f24f36bd1c";
export const url=new URL("../icons/lucid_1-cloudy.svg?v=51b9e02dd870bc7ed2aa4bc60428bc565c45e2b6ae206718debd9bf36b4f2efc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
