export const name="download-simple-thin";
export const id="dl_e7ad5349f68f4caba6b8";
export const url=new URL("../icons/download-simple-thin.svg?v=944ec992232cb2768533e4dd4164d83272533ba8e769387c59c357338e3e7625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
