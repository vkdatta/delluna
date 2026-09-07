export const name="dropbox-logo-thin";
export const id="dl_2af5e5b6a87f4328b64c";
export const url=new URL("../icons/dropbox-logo-thin.svg?v=2947353676ec102778ba4b9707de4fffcf7b15ffdebdb20e5be5165685444dfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
