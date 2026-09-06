export const name="file-archive-thin";
export const id="dl_59a4ba41e282490ab692";
export const url=new URL("../icons/file-archive-thin.svg?v=25c7c45d3f3c6dcde07064cef050d7268b9c9362727ff5c73975fbeee2f93cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
